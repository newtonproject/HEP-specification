# Error codes for builtin javascript support and native iOS&Android DApp

## The format of response

| Field | Type | Notes |
| --- | --- | --- |
| status_code | int | The status code. |
| message | string | The error message, support i18n. |
| errors       | json    | The detail error list, see [error.json](../schema/error.json) |
| result       | json    | The result |

```

```

## List of error code

### Common
| Code | Description |
|:--:|:--:|
| 1 | success |
| 2 | cancel |
| 3 | network error information |
| 4 | no network |

### Validation Error
| Code | Description |
|:--:|:--:|
| 1000 | newpay is not installed. |
| 1001 | no wallet. |
| 1002 | no newid. |
| 1003 | dapp id is not existed. |
| 1004 | bundle id or package name is not existed. |
| 1005 | no action or action error |
| 1006 | wrong hep version |
| 1007 | unsupported protocol |
| 1008 | signature error |

### Authentication Error
| Code | Description |
|:--:|:--:|
| 1100 | The action hash has expired |

