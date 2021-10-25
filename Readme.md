# Figma interface language: Grammar

## Overview
A simple DSL for describing interfaces that can be compiled to build a Figma mockup using both existing and new components.

**file extension:** *.fil*

##### Example ([Tweet](https://twitter.com/parkerhendo/status/1452407181106614280?s=20))

```javascript
declare Component as "Header" {
  group(direction: "column", alignment: "center") {
    Logo
    Title[string]
    Subtitle[string]
  } 
}

describe Interface as "Sign up" for OnboardingFlow {
  Header(
    title="Welcome to Acme"
    subtitle="Create an account to get started"
  )
  Form {
    Row {
      Input["First name"]
      Input["Last name"]
    }
    Input["Email address"]
    Input["Create password"]
    Input["Confirm password"]
    Spacer[tokens("space8")]
    Button["Create account"]
  }
}
```

---

| Keyword | Description |
| ------- | ----------- |
| define  | Keyword for defining and referencing color and type styles |
| declare | Keyword for declaring a reusable component |
| describe | Keyword for describing an interface. This is for when you want to build out an entire "screen" (i.e. adding multiple components) as part of a flow. |
| group    | Native element for declaring an auto-layout frame. Exposes the entire auto-layout API to the user. |