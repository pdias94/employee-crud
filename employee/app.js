'use strict'

const databaseHandler = require('./model/databaseHandler');
const statusEnum = require('./utils/enum/statusCode');

exports.lambdaHandler = async (event) => {
	switch(event.httpMethod) {
		case 'POST':
			return addEmployee(event);
		case 'GET':
			return getEmployees();
		case 'PUT':
			return updateEmployee(event);
		case 'DELETE':
			return deleteEmployee(event);
	}
};

async function addEmployee(event) {
	let employeeData = JSON.parse(event.body);

	const item = {
		Nome: employeeData.nome,
		Idade: employeeData.idade,
		Cargo: employeeData.cargo
	};

	try {
		await databaseHandler.save(item);
		
		return {
			'statusCode': statusEnum.CREATED,
			'body': JSON.stringify({
				'message': 'CREATED'
			})
		};
	}
	catch (err) {
		console.log(err);
		return err;
	}
}

async function getEmployees() {
	try {
		const data = await databaseHandler.getAll();

		return {
			'statusCode': statusEnum.OK,
			'body': JSON.stringify({
				'employees': data
			})
		}
	}
	catch (err) {
		console.log(err);
		return err;
	}
}

async function updateEmployee(event) {
	let employeeData = JSON.parse(event.body);

	const item = {
		Id: employeeData.id,
		Nome: employeeData.nome,
		Idade: employeeData.idade,
		Cargo: employeeData.cargo
	};

	try {
		await databaseHandler.update(item);
		
		return {
			'statusCode': statusEnum.OK,
			'body': JSON.stringify({
				'message': 'UPDATED'
			})
		};
	}
	catch (err) {
		console.log(err);
		return err;
	}
}

async function deleteEmployee(event) {
	let employeeData = JSON.parse(event.body);

	const item = {
		Id: employeeData.id
	}

	try {
		await databaseHandler.delete(item);
		
		return {
			'statusCode': statusEnum.OK,
			'body': JSON.stringify({
				'message': 'DELETED'
			})
		};
	}
	catch (err) {
		console.log(err);
		return err;
	}
}
