export AWS_ACCESS_KEY_ID=fakeAccessKey
export AWS_SECRET_ACCESS_KEY=fakeSecretKey
export AWS_DEFAULT_REGION=eu-west-1

aws dynamodb create-table --cli-input-json file://table-definition.json --endpoint-url http://localhost:8000

aws dynamodb list-tables --endpoint-url http://localhost:8000
