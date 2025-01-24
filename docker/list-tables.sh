export AWS_ACCESS_KEY_ID=fakeAccessKey
export AWS_SECRET_ACCESS_KEY=fakeSecretKey
export AWS_DEFAULT_REGION=eu-west-1

aws dynamodb list-tables --endpoint-url http://localhost:8000
