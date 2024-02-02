#!/bin/sh -x

regions="af-south-1 ap-east-1 ap-south-1 ap-southeast-1 ap-southeast-2 ca-central-1 eu-central-1 eu-west-2 me-south-1 sa-east-1 us-west-2"
for region in $regions; do
    aws s3 sync --delete --source-region eu-west-2 --region $region s3://www.surrealdb.com s3://www.${region}.surrealdb.com
done
