# API example in Node
https://js-api-profile.herokuapp.com/

# Contact
Leandro da Silva Huber - leandrohuber@yahoo.com

# Resources:
```
- user login
- user create
- post create
- post delete
- posts list
```

## Login

### **POST /login**

**BODY:**

```json
{
    email: <string>,
    password: <string>
}
```

**RESPONSE:**

```json
{
  auth: <boolean>,
	token: <string>
}
```

### **POST /user**

**BODY:**

```json
{
	name: <string>,
	email: <string>,
	password: <string>
}
```

**RESPONSE:**

```json
{
  email: <string>,
	name: <string>
}
```

### **DELETE /post**

**BODY:**

```json
{
	id: <integer>,
}
```

**RESPONSE:**

```json
{
  id: <integer>
}
```


### **POST /post**

**BODY:**

```json
{
	title: <string>,
  message: <string>
}
```

**RESPONSE:**

```json
{
	title: <string>,
  message: <string>
}
```

### **GET /post**

**BODY:**

```json
{}
```

**RESPONSE:**

```json
{
	<array>
}
```
