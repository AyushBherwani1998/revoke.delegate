![Build Status](https://img.shields.io/badge/build-passing-green?style=for-the-badge&logo=build)
![Solidity](https://img.shields.io/badge/solidity-yellow?style=for-the-badge&logo=solidity)
![Push Protocol](https://img.shields.io/badge/push-yellowgreen?style=for-the-badge&logo=PushProtocol)
![Curvegrid](https://img.shields.io/badge/curvegrid-blue?style=for-the-badge&logo=curvegrid)
![Metamask delegation toolkit](https://img.shields.io/badge/Delegation–ToolKit-important?style=for-the-badge)
![EVMChains](https://img.shields.io/badge/EVMChains-lightgrey?style=for-the-badge)
![ERC 7975](https://img.shields.io/badge/7579-lightgrey?style=for-the-badge)

<h1 align="center">Revoke.Delegate</h1>
<img src="https://i.imgur.com/LEAf724.png" title="source: imgur.com"/></a>

## Overview

Token approvals are a core part of the smart contract ecosystem. Without them, a lot of DeFi applications would not be possible. But there are also risks to token approvals. If you give a smart contract permission to spend your tokens, it can spend them at any time. So if the smart contract is hacked or malicious, your tokens can be stolen.

We provide real-time protection from exploits by revoking approvals for exploited smart contract addresses.

## Problem statement

1. Managing them proactively is very impossible

2. Its very difficult to always keep an eye on the ecosystem about what exploits and ongoing and react suitably in time.

3. New user's are afraid of crypto beacause all they hear are about exploits thus making them hesitant.

## Use cases

1. To save funds from getting drained due to smart contract exploits

2. As a inbuilt-feature or integration inside of wallets to make them more secure and provide improved experience.

3. Smart revocation, to revoke allowances periodically without manual intervention.

## About Revoke.Delegate

Revoke.Delegate revokes smart contract allowances as soon as the exploit is reported making sure the damage is to its minimum.

• A user delegates a very specific permission to "set token approval to 0" to revoke.delegate.

• Revoke.delegate doesn't own any Private keys or permissions other then the one delegated above – this makes it very secure

• As soon as an exploit is reported revoke.delegate would be able to safeguard all wallets by revoking the allowances for the exploited contracts.

## How it's Made

1. We use Metamask Delegation toolkit to delegate the functionality to set the allowances to 0.

2. ERC 7579: Under the hood, the Delegation manager uses `executeFromExecutor` to perform the redeem delegation operation, making it compaitible with Safe, Kernal, and Biconomy nexus.

3. Curvegrid: We use Curvegrid as a "delegate" in the whole architecture, it works as a paymaster who revokes the allowances on delegator's behalf.

4. NounsDAO resource: For building a user friendly and fun – visual and verbal branding.

5. Push protocol: We use push protocol to notify the users about the approvals that have been been revoked – saving the wallets from getting drained.

6. Celo Composer and Next.js for reponsive web experience across devices.

## Contract Addresses

Since, Delegation framework has a lot of contracts for core architecture, and enforcers please [check the details on the repository](https://github.com/AyushBherwani1998/delegation-framework/tree/main/broadcast).
