# @plasma-fi/token-lists

[![test](https://github.com/itsib/plasmaswap-token-list/workflows/test/badge.svg)](https://github.com/itsib/plasmaswap-token-list/actions?query=workflow%3Atest)
[![npm](https://img.shields.io/npm/v/@plasma-fi/token-lists)](https://unpkg.com/@plasma-fi/token-lists@latest/)


This package includes a JSON schema for token lists, and TypeScript utilities for working with token lists.

The JSON schema represents the technical specification for a token list which can be used in a dApp interface. Like as [PlasmaSwap](https://apy.plasma.finance/).

Specifically an instance of a token list is a [JSON](https://www.json.org/json-en.html) blob that contains a list of 
[ERC20](https://github.com/ethereum/eips/issues/20) token metadata for use in dApp user interfaces.
Token list JSON must validate against the [JSON schema](https://json-schema.org/) in order to be used in the [PlasmaSwap](https://apy.plasma.finance/) Interface.
Tokens on token lists, and token lists themselves, are tagged so that users can easily find tokens.
