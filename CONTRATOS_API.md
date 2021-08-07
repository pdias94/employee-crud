# Contratos da API
## Endpoint:  
https://96yewfm7wh.execute-api.us-east-2.amazonaws.com/Stage/employee

## Métodos
* [Criar Funcionário](#criar)
* [Listar Funcionário](#listar)
* [Editar Funcionário](#editar)
* [Deletar Funcionário](#deletar)

---
## Criar
```
POST https://96yewfm7wh.execute-api.us-east-2.amazonaws.com/Stage/employee
```

### CORPO:
```
{
	"nome": "Pedro",
	"idade": 28,
	"cargo": "Developer"
}
```

### RESPOSTA SUCESSO:
```
201 CREATED

{
  "message": "CREATED"
}
```

### RESPOSTA FALHA:
```
500 INTERNAL SERVER ERROR

{
  "message": "Internal server error"
}
```
---
## Listar
```
GET https://96yewfm7wh.execute-api.us-east-2.amazonaws.com/Stage/employee
```

### CORPO:
```
VAZIO
```

### RESPOSTA SUCESSO:
```
200 OK

{
  "employees": [
    {
      "Cargo": "Developer",
      "Nome": "Pedro",
      "Id": "214760be-875a-4222-b6e9-0f40530d2a86",
      "Idade": 28
    }
  ]
}
```

### RESPOSTA FALHA:
```
500 INTERNAL SERVER ERROR

{
  "message": "Internal server error"
}
```
---

## Editar
```
PUT https://96yewfm7wh.execute-api.us-east-2.amazonaws.com/Stage/employee
```

### CORPO:
```
{
	"id": "214760be-875a-4222-b6e9-0f40530d2a86",
	"nome": "Pedro Dias",
	"idade": 27,
	"cargo": "Developer Senior"
}
```

### RESPOSTA SUCESSO:
```
200 OK

{
  "message": "UPDATED"
}
```

### RESPOSTA FALHA:
```
500 INTERNAL SERVER ERROR

{
  "message": "Internal server error"
}
```
---

## DELETAR
```
DELETE https://96yewfm7wh.execute-api.us-east-2.amazonaws.com/Stage/employee
```

### CORPO:
```
{
	"id": "214760be-875a-4222-b6e9-0f40530d2a86",
}
```

### RESPOSTA SUCESSO:
```
200 OK

{
  "message": "DELETED"
}
```

### RESPOSTA FALHA:
```
500 INTERNAL SERVER ERROR

{
  "message": "Internal server error"
}
---

