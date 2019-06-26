# Error Message for Server-side callback of DWeb DApp

## Error Message
| Name | Description |
|:--:|:--:|
| SESSION_EXPIRED | Sesson is expired. |
| INVALID_SIGNATURE | Invalid Signature. |
| INTERNAL_ERROR | Internal Error. |

## Example
If call the server-side callback success, return HTTP status code `200`.
Otherwise return `4xx`,`5xx`, the error message will be json-encoded format.
For example as follows:

```
{
	'errors': [
		{
        	'name': 'SESSION_EXPIRED',
            'message': 'The session is expired.'
        }
    ]
}
```
