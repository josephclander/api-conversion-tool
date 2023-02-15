# Cyclr Conversion Tool

## Solution Explanation

The standard solution loops the given data and builds a map of the individual attributes, then returns it. This assumes the provider has given the information in the precise format of:

- attributes array
- containing objects
- with keys
  - key
  - value

To build a hash/map is a common pattern and it automatically scales for any amount of objects in the array.

However, knowing apis can be updated, not follow their own schema or have unexpected data, I've devised some further tests to give sufficient user feedback if there is an issue.

## Input - Output Example Tests

The first test follows the happy path for the example given. I have then added further examples to highlight where I believe the data may not come back as expected and how to deal with that.

### 1. This is the standard happy path information given to convert.

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

### 2. array not called 'attributes'

input example:

```json
{
  "newTitle": [
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
  "message": "no 'attributes' array from provider"
}
```
