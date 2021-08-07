'use-strict'

const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});
let ddb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME;

module.exports.save = async item => {
  item.Id = uuidv4();

  const params = {
    TableName: TABLE_NAME,
    Item: item
  }

  await ddb.put(params).promise();
}

module.exports.getAll = async () => {
    const data = await ddb.scan({
      TableName: TABLE_NAME
    }).promise();

    return data.Items;
}

module.exports.update = async item => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      'Id': item.Id
    },
    UpdateExpression: "set Nome = :n, Idade = :i, Cargo = :c",
    ExpressionAttributeValues: {
      ':n': item.Nome,
      ':i': item.Idade,
      ':c': item.Cargo,
    }
  }

  await ddb.update(params).promise();
}

module.exports.delete = async item => {
  await ddb.delete({
    TableName: TABLE_NAME,
    Key: {
      'Id': item.Id
    }
  }).promise();
}