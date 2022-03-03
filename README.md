# HTTP Response Headers Checker

This action accepts a URL, an expected HTTP response header and an expected value for that header and will return an output of `success` with a value of `true` || `false` based on whether or not the header and its value are found.

## Inputs

## `urlToTest`

**Required** The URL to check for the expected HTTP response header.

## `expectedHttpHeader`

**Required** The string representation of the expected HTTP headers name in lowercase.

## `expectedHttpHeaderValue`

**Required** **Required** The string representation of the expected HTTP headers value in lowercase.

## Outputs

## `success`

A boolean representation on the output

## Example usage

uses: actions/header-check-action@v1.1
with:
  urlToTest: 'https://google.com'
  expectedHttpHeader: "content-type"
  expectedHttpHeaderValue: "text/html; charset=ISO-8859-1"
