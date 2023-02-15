# Cyclr Conversion Tool

## Input - Output Example Tests

1. This is the standard happy path information given to convert.

input example:

```json
{
  "attributes": [
    {
      "key": "email",
      "value": "jamesd@example.com"
    },
    {
      "key": "name",
      "value": "James Dean"
    },
    {
      "key": "shoesize",
      "value": 10
    }
  ]
}
```

output example:

```json
{
  "email": "jamesd@example.com",
  "name": "James Dean",
  "shoesize": 10
}
```
