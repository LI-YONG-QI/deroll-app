# Deroll template

This is a template for [Cartesi](https://cartesi.io) applications that use the [Deroll](https://github.com/tuler/deroll) framework.

For documentation on how to develop Cartesi applications refer to https://docs.cartesi.io

For documentation on how to use Deroll refer to https://github.com/tuler/deroll

Application logic should go in `src/index.ts`.

# Contract

This Dapp is currently running on Base

- Application : 0x27c078DF133D949E469F1ee36f3B5F7eB7ddbde4
- Input Box : 0x59b22D57D4f067708AB0c00552767405926dc768

# How to start

Pre-requisites:

- Install RISC-V Docker image
- Docker running

1. Build

```shell
cartesi build
```

2. Start Anvil before run

```shell
anvil
```

3. Run

```shell
cartesi run
```
