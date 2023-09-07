#!/bin/bash
mkdir function 

cp -r ./controllers ./function
cp -r ./models ./function
cp -r routes ./function
cp -r config ./function
cp index.js ./function
cp package.json ./function

cd function
npm i 

zip -r function_zipped.zip ./*

aws iam create-role \
  --role-name BasicLambdaRole \
  --no-cli-pager \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "lambda.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  }'

role_arn=$(aws iam get-role --role-name BasicLambdaRole --query 'Role.Arn' --output text)




CHECK_IF_FUNCTION_EXISTS=$(aws lambda get-function --function-name "SM_Kennet_Server" 2>&1)

# If Lambda function already exists, update the function; otherwise, create a new one
if [ $? -eq 0 ]; then
    aws lambda update-function-code \
    --function-name SM_Kennet_Server \
    --no-cli-pager \
    --zip-file fileb://function_zipped.zip

else
    aws lambda create-function \
        --function-name SM_Kennet_Server \
        --runtime nodejs18.x \
        --role $role_arn \
        --handler index.handler \
        --zip-file fileb://function_zipped.zip \
        --no-cli-pager \
        --environment Variables={MONGODB_URI='mongodb+srv://user:MX0oV3MHiqM9WIN7@cluster0.1esfo.mongodb.net/?retryWrites=true&w=majority',PORT=8000,ENVIRONMENT=prod}    
fi


cd ../
rm -r function
