---
Description: How to run Besu and Teku on a testnet
---

# Run Besu and Teku on a testnet

Run Besu as an [execution client](../concepts/the-merge.md#execution-clients) and
[Teku](https://docs.teku.consensys.net/en/stable/)
as a [consensus client](../concepts/the-merge.md#consensus-clients) on the
[Goerli](https://github.com/eth-clients/goerli) and [Sepolia](https://github.com/eth-clients/sepolia)
Ethereum testnets.

!!! note

    Sepolia is a permissioned network and you can't run a validator client on it without
    [requesting to become a validator](https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg) first.
    You can connect your consensus client using the beacon node only, without any validator duties.

## 1. Install Besu and Teku

Install [Besu](../get-started/install/binary-distribution.md) and
[Teku](https://docs.teku.consensys.net/en/stable/HowTo/Get-Started/Installation-Options/Install-Binaries/).

Ensure you meet the prerequisites for the installation option you use.
For example, you must have Java 11+ if using the Besu and Teku binary distributions.

Ensure you meet the [system requirements for Besu on public networks](../get-started/system-requirements.md).

## 2. Generate the shared secret

Run the following command:

```bash
openssl rand -hex 32 | tr -d "\n" > jwtsecret.hex
```

You will specify `jwtsecret.hex` when starting Besu and Teku.
This is a shared JWT secret the clients use to authenticate each other when using the
[Engine API](../how-to/use-engine-api.md).

## 3. Start Besu

Run the following command or specify the options in a [configuration file](../how-to/configuration-file.md):

=== "Goerli"

    ```bash
    besu \
      --network=goerli            \
      --rpc-http-enabled=true     \
      --rpc-http-host=0.0.0.0     \
      --rpc-http-cors-origins="*" \
      --rpc-ws-enabled=true       \
      --rpc-ws-host=0.0.0.0       \
      --host-allowlist="*"        \
      --engine-host-allowlist="*" \
      --engine-rpc-enabled        \
      --engine-jwt-secret=<path to jwtsecret.hex>
    ```

=== "Sepolia"

    ```bash
    besu \
      --network=sepolia           \
      --rpc-http-enabled=true     \
      --rpc-http-host=0.0.0.0     \
      --rpc-http-cors-origins="*" \
      --rpc-ws-enabled=true       \
      --rpc-ws-host=0.0.0.0       \
      --host-allowlist="*"        \
      --engine-host-allowlist="*" \
      --engine-rpc-enabled        \
      --engine-jwt-secret=<path to jwtsecret.hex>
    ```

Specify the path to the `jwtsecret.hex` file generated in [step 2](#2-generate-the-shared-secret) using the
[`--engine-jwt-secret`](../reference/cli/options.md#engine-jwt-secret) option.

You can modify the option values and add other [command line options](../reference/cli/options.md)
as needed.

Ensure Besu is fully synced before submitting your staking deposit in the next step.
This can take several days.

## 4. Generate validator keys and stake ETH

If you're running a beacon node only, skip to the next step.

If you're also running a validator client, create a test Ethereum address (you can do this in
[MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-wallet)).
Fund this address with testnet ETH (32 ETH and gas fees for each validator) using a faucet.
See the list of [Goerli faucets](https://github.com/eth-clients/goerli#meta-data-g%C3%B6rli) and [Sepolia faucets](https://github.com/eth-clients/sepolia#meta-data-sepolia).

!!! note

    If you're unable to get ETH using the faucet, you can ask for help on the
    [EthStaker Discord](https://discord.io/ethstaker).

Generate validator keys and stake your testnet ETH for one or more validators using the
[Goerli Staking Launchpad](https://goerli.launchpad.ethereum.org/).

!!! important

    Save the password you use to generate each key pair in a `.txt` file.
    You should also have a `.json` file for each validator key pair.

    Ensure your Besu node is fully synced before submitting your staking deposit. This can take several days.

## 5. Start Teku

Open a new terminal window.

### Beacon node only

To run Teku as a beacon node only (without validator duties), run the following command or specify the
options in the [Teku configuration file]:

=== "Goerli"

    ```bash
    teku \
      --network=goerli                             \
      --ee-endpoint=http://localhost:8551          \
      --ee-jwt-secret-file=<path to jwtsecret.hex> \
      --metrics-enabled=true                       \
      --rest-api-enabled=true
    ```

=== "Sepolia"

    ```bash
    teku \
      --network=sepolia                            \
      --ee-endpoint=http://localhost:8551          \
      --ee-jwt-secret-file=<path to jwtsecret.hex> \
      --metrics-enabled=true                       \
      --rest-api-enabled=true
    ```

Specify the path to the `jwtsecret.hex` file generated in [step 2](#2-generate-the-shared-secret) using
the [`--ee-jwt-secret-file`](https://docs.teku.consensys.net/en/stable/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file)
option.

You can modify the option values and add other [Teku command line options] as needed.

### Beacon node and validator client

To run Teku as a beacon node and validator in a single process, run the following command or specify
the options in the [Teku configuration file]:

=== "Goerli"

    ```bash
    teku \
      --network=goerli                                          \
      --ee-endpoint=http://localhost:8551                       \
      --ee-jwt-secret-file=<path to jwtsecret.hex>              \
      --metrics-enabled=true                                    \
      --rest-api-enabled=true                                   \
      --validators-proposer-default-fee-recipient=<ETH address> \
      --validator-keys=<path to key file>:<path to password file>[,<path to key file>:<path to password file>,...]
    ```

=== "Sepolia"

    Sepolia is a permissioned network and you can't run a validator client on it without
    [requesting to become a validator](https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg) first.

Specify:

- The path to the `jwtsecret.hex` file generated in [step 2](#2-generate-the-shared-secret) using the
  [`--ee-jwt-secret-file`](https://docs.teku.consensys.net/en/stable/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file) option.
- The test Ethereum address created in [step 4](#4-generate-validator-keys-and-stake-eth) as the default fee recipient
  using the
  [`--validators-proposer-default-fee-recipient`](https://docs.teku.consensys.net/en/stable/Reference/CLI/CLI-Syntax/#validators-proposer-default-fee-recipient)
  option.
- The paths to the keystore `.json` file and password `.txt` file created in
  [step 4](#4-generate-validator-keys-and-stake-eth) for each validator using the
  [`--validator-keys`](https://docs.teku.consensys.net/en/stable/Reference/CLI/CLI-Syntax/#validator-keys) option.
  Separate the `.json` and `.txt` files with a colon, and separate entries for multiple validators with commas.

You can modify the option values and add other [Teku command line options] as needed.

## After starting Besu and Teku

After starting Besu and Teku, your node starts syncing and connecting to peers.

!!! example

    === "Besu logs"

        ```bash
        2022-03-21 20:42:09.295-07:00 | EthScheduler-Timer-0 | INFO  | FullSyncTargetManager | No sync target, waiting for peers. Current peers: 0
        2022-03-21 20:42:14.298-07:00 | EthScheduler-Timer-0 | INFO  | FullSyncTargetManager | No sync target, waiting for peers. Current peers: 0
        2022-03-21 20:42:14.848-07:00 | nioEventLoopGroup-3-8 | INFO  | FullSyncTargetManager | No sync target, waiting for peers. Current peers: 4
        2022-03-21 20:42:18.452-07:00 | nioEventLoopGroup-3-8 | INFO  | SyncTargetManager | Found common ancestor with peer Peer 0xab3a286b181721c794... at block 55127
        2022-03-21 20:42:18.454-07:00 | nioEventLoopGroup-3-8 | INFO  | PipelineChainDownloader | PipelineChain download complete
        ```

    === "Teku logs"

        ```bash
        2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8
        2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10
        2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8
        2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6
        2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9
        ```

You can check your validator status by searching your Ethereum address on the [Goerli Beacon Chain explorer](https://goerli.beaconcha.in/).
It may take up to multiple days for your validator to be activated and start proposing blocks.

!!! caution

    If you restart your node before snap or checkpoint sync completes, syncing restarts from scratch.

<!--links-->

[Teku configuration file]: https://docs.teku.consensys.net/en/latest/HowTo/Configure/Use-Configuration-File/
[Teku command line options]: https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/