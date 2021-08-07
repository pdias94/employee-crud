# Desafio Stefanini

O projeto foi implementado utilizando o SAM CLI da AWS para deploy automatizado da infraetrutura da API serverless.

Recursos AWS utilizados:
- Lambda: Processamento de regras de negócio
- DynamoDB: Para armazenamento de dados do funcionário
- API Gateway: Para roteamento da API


O SAM utiliza da sintaxe do cloudformation e o arquivo de configuração se encontra em:

``
template.yaml
``

Para realizar um deploy da infra em sua conta AWS basta utilizar os comandos:

```
sam build
```
Em seguida:
```
sam deploy --guided
```

Para mais informações consulte os roteiros oficiais da AWS em:
* [build](https://cicd.serverlessworkshops.io/javascript/manualdeploy/build.html)
* [deploy](https://cicd.serverlessworkshops.io/javascript/manualdeploy/deploy.html)

# Requests
As requisições da API se encontram no arquivo [CONTRATOS_API.md](./CONTRATOS_API.md)

Na pasta raíz deste projeto se encontra o arquivo ``requests.json`` no formato para importação no [Insomnia](https://insomnia.rest/download)

## TODO
- Implementação de testes utilizando JEST