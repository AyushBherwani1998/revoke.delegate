import { PREFERRED_VERSION } from "@codefi/delegator-core-viem";

export const CHAIN_ID = {
    mainnet: 1,
    optimism: 10,
    polygon: 137,
    base: 8543,
    arbitrum: 42161,
    linea: 59144,
    sepolia: 11155111,
    lineaGoerli: 59140,
    lineaSepolia: 59141,
    baseSepolia: 84532,
    mantleSepoliaTestnet: 5003,
    celoAlfajores: 44787,
    zircuitTestnet: 48899,
    scrollSepoliaTestnet: 534351,
    morphHolesky: 2810,
  };
  
  export const DELEGATOR_CONTRACTS = {
    "1.1.0": {
      // Mainnets
      [CHAIN_ID.arbitrum]: {
        DelegationManager: "0x56D56e07e3d6Ee5a24e30203A37a0a460f42D7A3",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0xd1f421EDbA5e3FA9efe3874827114b20C5BEC40C",
        HybridDeleGatorImpl: "0x941f3a016F8726d5643Ce62452d0D78492D42b42",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0xff71d60f3208469cBCE0859717B5198042DCB3F3",
        AllowedMethodsEnforcer: "0xe32C2561792e8446Abe73B9f557B881C13906186",
        AllowedTargetsEnforcer: "0x06aaE4c67EEA95277c46Bf79b1583d4a01772D22",
        BlockNumberEnforcer: "0x8E470D2Ae278457b42d2405E0B8Cd4BE21Ed9045",
        DeployedEnforcer: "0xf9088f013dBD9ebb7Cebd66fEB48253c6Ac5a820",
        ERC20BalanceGteEnforcer: "0xB7B6f32ec6343261D814e55Ed8C5925d91Cab861",
        ERC20TransferAmountEnforcer: "0x9A069b18032B31429A363AeCFb1B6A0564b44471",
        IdEnforcer: "0x91015c3b9D9523966eD2399885e5Df7A567f916c",
        LimitedCallsEnforcer: "0xe694bFfffEA3E85923b1210b37e6a0175e910863",
        NonceEnforcer: "0xE83BCFD8bBE672A96747e831050a91cf44F4F87A",
        TimestampEnforcer: "0x550FdD13eEBC1f22ea2a2480024BacBF0Ad7e5CE",
        ValueLteEnforcer: "0xBE32a6DB7471F63BB168C088c57Db01AfAe87967",
        NativeTokenTransferAmountEnforcer: "0x5eD3833d7B957A8DB8A461c3AF2d668Ec25382E0",
        NativeBalanceGteEnforcer: "0x376a98860E210DdEda3689fb39565592c563cB0A",
        ArgsEqualityCheckEnforcer: "0x7378dE585998d3E18Ce147867C335C25B3dB8Ee5",
        NativeTokenPaymentEnforcer: "0x87Fe18EbF99e42fcE8A03a25F1d20E119407f8e7",
        RedeemerEnforcer: "0x926672b130D1EF60A9d6b11D2048d121b30f40C1"
      },
      [CHAIN_ID.base]: {
        DelegationManager: "0x56D56e07e3d6Ee5a24e30203A37a0a460f42D7A3",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0xd1f421EDbA5e3FA9efe3874827114b20C5BEC40C",
        HybridDeleGatorImpl: "0x941f3a016F8726d5643Ce62452d0D78492D42b42",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0xff71d60f3208469cBCE0859717B5198042DCB3F3",
        AllowedMethodsEnforcer: "0xe32C2561792e8446Abe73B9f557B881C13906186",
        AllowedTargetsEnforcer: "0x06aaE4c67EEA95277c46Bf79b1583d4a01772D22",
        BlockNumberEnforcer: "0x8E470D2Ae278457b42d2405E0B8Cd4BE21Ed9045",
        DeployedEnforcer: "0xf9088f013dBD9ebb7Cebd66fEB48253c6Ac5a820",
        ERC20BalanceGteEnforcer: "0xB7B6f32ec6343261D814e55Ed8C5925d91Cab861",
        ERC20TransferAmountEnforcer: "0x9A069b18032B31429A363AeCFb1B6A0564b44471",
        IdEnforcer: "0x91015c3b9D9523966eD2399885e5Df7A567f916c",
        LimitedCallsEnforcer: "0xe694bFfffEA3E85923b1210b37e6a0175e910863",
        NonceEnforcer: "0xE83BCFD8bBE672A96747e831050a91cf44F4F87A",
        TimestampEnforcer: "0x550FdD13eEBC1f22ea2a2480024BacBF0Ad7e5CE",
        ValueLteEnforcer: "0xBE32a6DB7471F63BB168C088c57Db01AfAe87967",
        NativeTokenTransferAmountEnforcer: "0x5eD3833d7B957A8DB8A461c3AF2d668Ec25382E0",
        NativeBalanceGteEnforcer: "0x376a98860E210DdEda3689fb39565592c563cB0A",
        ArgsEqualityCheckEnforcer: "0x7378dE585998d3E18Ce147867C335C25B3dB8Ee5",
        NativeTokenPaymentEnforcer: "0x87Fe18EbF99e42fcE8A03a25F1d20E119407f8e7",
        RedeemerEnforcer: "0x926672b130D1EF60A9d6b11D2048d121b30f40C1"
      },
      [CHAIN_ID.linea]: {
        DelegationManager: "0x56D56e07e3d6Ee5a24e30203A37a0a460f42D7A3",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0xd1f421EDbA5e3FA9efe3874827114b20C5BEC40C",
        HybridDeleGatorImpl: "0x941f3a016F8726d5643Ce62452d0D78492D42b42",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0xff71d60f3208469cBCE0859717B5198042DCB3F3",
        AllowedMethodsEnforcer: "0xe32C2561792e8446Abe73B9f557B881C13906186",
        AllowedTargetsEnforcer: "0x06aaE4c67EEA95277c46Bf79b1583d4a01772D22",
        BlockNumberEnforcer: "0x8E470D2Ae278457b42d2405E0B8Cd4BE21Ed9045",
        DeployedEnforcer: "0xf9088f013dBD9ebb7Cebd66fEB48253c6Ac5a820",
        ERC20BalanceGteEnforcer: "0xB7B6f32ec6343261D814e55Ed8C5925d91Cab861",
        ERC20TransferAmountEnforcer: "0x9A069b18032B31429A363AeCFb1B6A0564b44471",
        IdEnforcer: "0x91015c3b9D9523966eD2399885e5Df7A567f916c",
        LimitedCallsEnforcer: "0xe694bFfffEA3E85923b1210b37e6a0175e910863",
        NonceEnforcer: "0xE83BCFD8bBE672A96747e831050a91cf44F4F87A",
        TimestampEnforcer: "0x550FdD13eEBC1f22ea2a2480024BacBF0Ad7e5CE",
        ValueLteEnforcer: "0xBE32a6DB7471F63BB168C088c57Db01AfAe87967",
        NativeTokenTransferAmountEnforcer: "0x5eD3833d7B957A8DB8A461c3AF2d668Ec25382E0",
        NativeBalanceGteEnforcer: "0x376a98860E210DdEda3689fb39565592c563cB0A",
        ArgsEqualityCheckEnforcer: "0x7378dE585998d3E18Ce147867C335C25B3dB8Ee5",
        NativeTokenPaymentEnforcer: "0x87Fe18EbF99e42fcE8A03a25F1d20E119407f8e7",
        RedeemerEnforcer: "0x926672b130D1EF60A9d6b11D2048d121b30f40C1"
      },
      [CHAIN_ID.optimism]: {
        DelegationManager: "0x56D56e07e3d6Ee5a24e30203A37a0a460f42D7A3",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0xd1f421EDbA5e3FA9efe3874827114b20C5BEC40C",
        HybridDeleGatorImpl: "0x941f3a016F8726d5643Ce62452d0D78492D42b42",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0xff71d60f3208469cBCE0859717B5198042DCB3F3",
        AllowedMethodsEnforcer: "0xe32C2561792e8446Abe73B9f557B881C13906186",
        AllowedTargetsEnforcer: "0x06aaE4c67EEA95277c46Bf79b1583d4a01772D22",
        BlockNumberEnforcer: "0x8E470D2Ae278457b42d2405E0B8Cd4BE21Ed9045",
        DeployedEnforcer: "0xf9088f013dBD9ebb7Cebd66fEB48253c6Ac5a820",
        ERC20BalanceGteEnforcer: "0xB7B6f32ec6343261D814e55Ed8C5925d91Cab861",
        ERC20TransferAmountEnforcer: "0x9A069b18032B31429A363AeCFb1B6A0564b44471",
        IdEnforcer: "0x91015c3b9D9523966eD2399885e5Df7A567f916c",
        LimitedCallsEnforcer: "0xe694bFfffEA3E85923b1210b37e6a0175e910863",
        NonceEnforcer: "0xE83BCFD8bBE672A96747e831050a91cf44F4F87A",
        TimestampEnforcer: "0x550FdD13eEBC1f22ea2a2480024BacBF0Ad7e5CE",
        ValueLteEnforcer: "0xBE32a6DB7471F63BB168C088c57Db01AfAe87967",
        NativeTokenTransferAmountEnforcer: "0x5eD3833d7B957A8DB8A461c3AF2d668Ec25382E0",
        NativeBalanceGteEnforcer: "0x376a98860E210DdEda3689fb39565592c563cB0A",
        ArgsEqualityCheckEnforcer: "0x7378dE585998d3E18Ce147867C335C25B3dB8Ee5",
        NativeTokenPaymentEnforcer: "0x87Fe18EbF99e42fcE8A03a25F1d20E119407f8e7",
        RedeemerEnforcer: "0x926672b130D1EF60A9d6b11D2048d121b30f40C1"
      },
      [CHAIN_ID.polygon]: {
        DelegationManager: "0x56D56e07e3d6Ee5a24e30203A37a0a460f42D7A3",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0xd1f421EDbA5e3FA9efe3874827114b20C5BEC40C",
        HybridDeleGatorImpl: "0x941f3a016F8726d5643Ce62452d0D78492D42b42",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0xff71d60f3208469cBCE0859717B5198042DCB3F3",
        AllowedMethodsEnforcer: "0xe32C2561792e8446Abe73B9f557B881C13906186",
        AllowedTargetsEnforcer: "0x06aaE4c67EEA95277c46Bf79b1583d4a01772D22",
        BlockNumberEnforcer: "0x8E470D2Ae278457b42d2405E0B8Cd4BE21Ed9045",
        DeployedEnforcer: "0xf9088f013dBD9ebb7Cebd66fEB48253c6Ac5a820",
        ERC20BalanceGteEnforcer: "0xB7B6f32ec6343261D814e55Ed8C5925d91Cab861",
        ERC20TransferAmountEnforcer: "0x9A069b18032B31429A363AeCFb1B6A0564b44471",
        IdEnforcer: "0x91015c3b9D9523966eD2399885e5Df7A567f916c",
        LimitedCallsEnforcer: "0xe694bFfffEA3E85923b1210b37e6a0175e910863",
        NonceEnforcer: "0xE83BCFD8bBE672A96747e831050a91cf44F4F87A",
        TimestampEnforcer: "0x550FdD13eEBC1f22ea2a2480024BacBF0Ad7e5CE",
        ValueLteEnforcer: "0xBE32a6DB7471F63BB168C088c57Db01AfAe87967",
        NativeTokenTransferAmountEnforcer: "0x5eD3833d7B957A8DB8A461c3AF2d668Ec25382E0",
        NativeBalanceGteEnforcer: "0x376a98860E210DdEda3689fb39565592c563cB0A",
        ArgsEqualityCheckEnforcer: "0x7378dE585998d3E18Ce147867C335C25B3dB8Ee5",
        NativeTokenPaymentEnforcer: "0x87Fe18EbF99e42fcE8A03a25F1d20E119407f8e7",
        RedeemerEnforcer: "0x926672b130D1EF60A9d6b11D2048d121b30f40C1"
      },
      // Testnets
      [CHAIN_ID.sepolia]: {
        DelegationManager: "0x56D56e07e3d6Ee5a24e30203A37a0a460f42D7A3",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0xd1f421EDbA5e3FA9efe3874827114b20C5BEC40C",
        HybridDeleGatorImpl: "0x941f3a016F8726d5643Ce62452d0D78492D42b42",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0xff71d60f3208469cBCE0859717B5198042DCB3F3",
        AllowedMethodsEnforcer: "0xe32C2561792e8446Abe73B9f557B881C13906186",
        AllowedTargetsEnforcer: "0x06aaE4c67EEA95277c46Bf79b1583d4a01772D22",
        BlockNumberEnforcer: "0x8E470D2Ae278457b42d2405E0B8Cd4BE21Ed9045",
        DeployedEnforcer: "0xf9088f013dBD9ebb7Cebd66fEB48253c6Ac5a820",
        ERC20BalanceGteEnforcer: "0xB7B6f32ec6343261D814e55Ed8C5925d91Cab861",
        ERC20TransferAmountEnforcer: "0x9A069b18032B31429A363AeCFb1B6A0564b44471",
        IdEnforcer: "0x91015c3b9D9523966eD2399885e5Df7A567f916c",
        LimitedCallsEnforcer: "0xe694bFfffEA3E85923b1210b37e6a0175e910863",
        NonceEnforcer: "0xE83BCFD8bBE672A96747e831050a91cf44F4F87A",
        TimestampEnforcer: "0x550FdD13eEBC1f22ea2a2480024BacBF0Ad7e5CE",
        ValueLteEnforcer: "0xBE32a6DB7471F63BB168C088c57Db01AfAe87967",
        NativeTokenTransferAmountEnforcer: "0x5eD3833d7B957A8DB8A461c3AF2d668Ec25382E0",
        NativeBalanceGteEnforcer: "0x376a98860E210DdEda3689fb39565592c563cB0A",
        ArgsEqualityCheckEnforcer: "0x7378dE585998d3E18Ce147867C335C25B3dB8Ee5",
        NativeTokenPaymentEnforcer: "0x87Fe18EbF99e42fcE8A03a25F1d20E119407f8e7",
        RedeemerEnforcer: "0x926672b130D1EF60A9d6b11D2048d121b30f40C1"
      },
      [CHAIN_ID.lineaSepolia]: {
        DelegationManager: "0x56D56e07e3d6Ee5a24e30203A37a0a460f42D7A3",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0xd1f421EDbA5e3FA9efe3874827114b20C5BEC40C",
        HybridDeleGatorImpl: "0x941f3a016F8726d5643Ce62452d0D78492D42b42",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0xff71d60f3208469cBCE0859717B5198042DCB3F3",
        AllowedMethodsEnforcer: "0xe32C2561792e8446Abe73B9f557B881C13906186",
        AllowedTargetsEnforcer: "0x06aaE4c67EEA95277c46Bf79b1583d4a01772D22",
        BlockNumberEnforcer: "0x8E470D2Ae278457b42d2405E0B8Cd4BE21Ed9045",
        DeployedEnforcer: "0xf9088f013dBD9ebb7Cebd66fEB48253c6Ac5a820",
        ERC20BalanceGteEnforcer: "0xB7B6f32ec6343261D814e55Ed8C5925d91Cab861",
        ERC20TransferAmountEnforcer: "0x9A069b18032B31429A363AeCFb1B6A0564b44471",
        IdEnforcer: "0x91015c3b9D9523966eD2399885e5Df7A567f916c",
        LimitedCallsEnforcer: "0xe694bFfffEA3E85923b1210b37e6a0175e910863",
        NonceEnforcer: "0xE83BCFD8bBE672A96747e831050a91cf44F4F87A",
        TimestampEnforcer: "0x550FdD13eEBC1f22ea2a2480024BacBF0Ad7e5CE",
        ValueLteEnforcer: "0xBE32a6DB7471F63BB168C088c57Db01AfAe87967",
        NativeTokenTransferAmountEnforcer: "0x5eD3833d7B957A8DB8A461c3AF2d668Ec25382E0",
        NativeBalanceGteEnforcer: "0x376a98860E210DdEda3689fb39565592c563cB0A",
        ArgsEqualityCheckEnforcer: "0x7378dE585998d3E18Ce147867C335C25B3dB8Ee5",
        NativeTokenPaymentEnforcer: "0x87Fe18EbF99e42fcE8A03a25F1d20E119407f8e7",
        RedeemerEnforcer: "0x926672b130D1EF60A9d6b11D2048d121b30f40C1"
      },
      [CHAIN_ID.baseSepolia]: {
        DelegationManager: "0x56D56e07e3d6Ee5a24e30203A37a0a460f42D7A3",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0xd1f421EDbA5e3FA9efe3874827114b20C5BEC40C",
        HybridDeleGatorImpl: "0x941f3a016F8726d5643Ce62452d0D78492D42b42",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0xff71d60f3208469cBCE0859717B5198042DCB3F3",
        AllowedMethodsEnforcer: "0xe32C2561792e8446Abe73B9f557B881C13906186",
        AllowedTargetsEnforcer: "0x06aaE4c67EEA95277c46Bf79b1583d4a01772D22",
        BlockNumberEnforcer: "0x8E470D2Ae278457b42d2405E0B8Cd4BE21Ed9045",
        DeployedEnforcer: "0xf9088f013dBD9ebb7Cebd66fEB48253c6Ac5a820",
        ERC20BalanceGteEnforcer: "0xB7B6f32ec6343261D814e55Ed8C5925d91Cab861",
        ERC20TransferAmountEnforcer: "0x9A069b18032B31429A363AeCFb1B6A0564b44471",
        IdEnforcer: "0x91015c3b9D9523966eD2399885e5Df7A567f916c",
        LimitedCallsEnforcer: "0xe694bFfffEA3E85923b1210b37e6a0175e910863",
        NonceEnforcer: "0xE83BCFD8bBE672A96747e831050a91cf44F4F87A",
        TimestampEnforcer: "0x550FdD13eEBC1f22ea2a2480024BacBF0Ad7e5CE",
        ValueLteEnforcer: "0xBE32a6DB7471F63BB168C088c57Db01AfAe87967",
        NativeTokenTransferAmountEnforcer: "0x5eD3833d7B957A8DB8A461c3AF2d668Ec25382E0",
        NativeBalanceGteEnforcer: "0x376a98860E210DdEda3689fb39565592c563cB0A",
        ArgsEqualityCheckEnforcer: "0x7378dE585998d3E18Ce147867C335C25B3dB8Ee5",
        NativeTokenPaymentEnforcer: "0x87Fe18EbF99e42fcE8A03a25F1d20E119407f8e7",
        RedeemerEnforcer: "0x926672b130D1EF60A9d6b11D2048d121b30f40C1"
      },
      [CHAIN_ID.celoAlfajores]: {
        DelegationManager: "0xed6b9DC9029FCaeaCF486426A941fa1703fd43C6",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0xfa54C6d0C6518E02b8aD7d1beCEf9595eEb0B26D",
        HybridDeleGatorImpl: "0x9Ae473F4795d7203D75BB476D95026324f6766eA",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0x8601056968510EC8434cAa2e6f7097FaAAb3a542",
        AllowedMethodsEnforcer: "0x16f2D2d1d14934b11dcE576006141D3DE28296a9",
        AllowedTargetsEnforcer: "0x7bB63520f19fc75F2ce0fFE3A1e1206fd88DB32c",
        BlockNumberEnforcer: "0x597B1616ca95916C6c6cE471cb4254aA10a3Fba6",
        DeployedEnforcer: "0xC991AF78518b7b8D29Ac65c57BBFBbeE40f12Eed",
        ERC20BalanceGteEnforcer: "0x255A63312a0542F7246e6331C1784E836cd2Fdb7",
        ERC20TransferAmountEnforcer: "0x133450F7cE925eB490FC2F3999c7e7c90ef4c797",
        IdEnforcer: "0xB1F5ff662C99127074A428B255ed0a1855Fe1471",
        LimitedCallsEnforcer: "0xf9bc9e9aE0c6999E813AfB8e31089124b2A30b29",
        NonceEnforcer: "0x2Fac192854Fba4f339238372D9d621549e8b9Ace",
        TimestampEnforcer: "0xDD805E67B40B4D3fd8BB2ecb8E92aE83224666B0",
        ValueLteEnforcer: "0x40914D4e2027cd629c320930a8CA3425F1Dd0356",
        NativeTokenTransferAmountEnforcer: "0x3a02B644A7d37a2E42523CA588d17ff55dB189a4",
        NativeBalanceGteEnforcer: "0xD0533Ca270Fa41cAc8bcAF179F481486d05EcB00",
        ArgsEqualityCheckEnforcer: "0x20E2F96E06bA2D4FA300bF2cC542EE33b6121554",
        NativeTokenPaymentEnforcer: "0xA0e93EFCA073B9e4C17dc5d2349e48bd9e7cba09",
        RedeemerEnforcer: "0x32f7FC08188f4d25d82F5E6B50024BbAF3e952A7"
      },
      [CHAIN_ID.scrollSepoliaTestnet]: {
        DelegationManager: "0x68A2c2EaEb80F9cBd88D43E2ee20813A0f560e76",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0x9f5F251a46B4aFf31bA9Cc4D46dd31969e4efCd9",
        HybridDeleGatorImpl: "0x0995b21c323E73c684a3976C106a14685029136A",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0x8601056968510EC8434cAa2e6f7097FaAAb3a542",
        AllowedMethodsEnforcer: "0x16f2D2d1d14934b11dcE576006141D3DE28296a9",
        AllowedTargetsEnforcer: "0x7bB63520f19fc75F2ce0fFE3A1e1206fd88DB32c",
        BlockNumberEnforcer: "0x597B1616ca95916C6c6cE471cb4254aA10a3Fba6",
        DeployedEnforcer: "0xC991AF78518b7b8D29Ac65c57BBFBbeE40f12Eed",
        ERC20BalanceGteEnforcer: "0x255A63312a0542F7246e6331C1784E836cd2Fdb7",
        ERC20TransferAmountEnforcer: "0x133450F7cE925eB490FC2F3999c7e7c90ef4c797",
        IdEnforcer: "0xB1F5ff662C99127074A428B255ed0a1855Fe1471",
        LimitedCallsEnforcer: "0xf9bc9e9aE0c6999E813AfB8e31089124b2A30b29",
        NonceEnforcer: "0x2Fac192854Fba4f339238372D9d621549e8b9Ace",
        TimestampEnforcer: "0xDD805E67B40B4D3fd8BB2ecb8E92aE83224666B0",
        ValueLteEnforcer: "0x40914D4e2027cd629c320930a8CA3425F1Dd0356",
        NativeTokenTransferAmountEnforcer: "0x3a02B644A7d37a2E42523CA588d17ff55dB189a4",
        NativeBalanceGteEnforcer: "0xD0533Ca270Fa41cAc8bcAF179F481486d05EcB00",
        ArgsEqualityCheckEnforcer: "0x20E2F96E06bA2D4FA300bF2cC542EE33b6121554",
        NativeTokenPaymentEnforcer: "0xA0e93EFCA073B9e4C17dc5d2349e48bd9e7cba09",
        RedeemerEnforcer: "0x32f7FC08188f4d25d82F5E6B50024BbAF3e952A7"
      },
      [CHAIN_ID.zircuitTestnet]: {
        DelegationManager: "0x68A2c2EaEb80F9cBd88D43E2ee20813A0f560e76",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0x9f5F251a46B4aFf31bA9Cc4D46dd31969e4efCd9",
        HybridDeleGatorImpl: "0x0995b21c323E73c684a3976C106a14685029136A",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0x8601056968510EC8434cAa2e6f7097FaAAb3a542",
        AllowedMethodsEnforcer: "0x16f2D2d1d14934b11dcE576006141D3DE28296a9",
        AllowedTargetsEnforcer: "0x7bB63520f19fc75F2ce0fFE3A1e1206fd88DB32c",
        BlockNumberEnforcer: "0x597B1616ca95916C6c6cE471cb4254aA10a3Fba6",
        DeployedEnforcer: "0xC991AF78518b7b8D29Ac65c57BBFBbeE40f12Eed",
        ERC20BalanceGteEnforcer: "0x255A63312a0542F7246e6331C1784E836cd2Fdb7",
        ERC20TransferAmountEnforcer: "0x133450F7cE925eB490FC2F3999c7e7c90ef4c797",
        IdEnforcer: "0xB1F5ff662C99127074A428B255ed0a1855Fe1471",
        LimitedCallsEnforcer: "0xf9bc9e9aE0c6999E813AfB8e31089124b2A30b29",
        NonceEnforcer: "0x2Fac192854Fba4f339238372D9d621549e8b9Ace",
        TimestampEnforcer: "0xDD805E67B40B4D3fd8BB2ecb8E92aE83224666B0",
        ValueLteEnforcer: "0x40914D4e2027cd629c320930a8CA3425F1Dd0356",
        NativeTokenTransferAmountEnforcer: "0x3a02B644A7d37a2E42523CA588d17ff55dB189a4",
        NativeBalanceGteEnforcer: "0xD0533Ca270Fa41cAc8bcAF179F481486d05EcB00",
        ArgsEqualityCheckEnforcer: "0x20E2F96E06bA2D4FA300bF2cC542EE33b6121554",
        NativeTokenPaymentEnforcer: "0xA0e93EFCA073B9e4C17dc5d2349e48bd9e7cba09",
        RedeemerEnforcer: "0x32f7FC08188f4d25d82F5E6B50024BbAF3e952A7"
      },
      [CHAIN_ID.mantleSepoliaTestnet]: {
        DelegationManager: "0x68A2c2EaEb80F9cBd88D43E2ee20813A0f560e76",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0x9f5F251a46B4aFf31bA9Cc4D46dd31969e4efCd9",
        HybridDeleGatorImpl: "0x0995b21c323E73c684a3976C106a14685029136A",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0x8601056968510EC8434cAa2e6f7097FaAAb3a542",
        AllowedMethodsEnforcer: "0x16f2D2d1d14934b11dcE576006141D3DE28296a9",
        AllowedTargetsEnforcer: "0x7bB63520f19fc75F2ce0fFE3A1e1206fd88DB32c",
        BlockNumberEnforcer: "0x597B1616ca95916C6c6cE471cb4254aA10a3Fba6",
        DeployedEnforcer: "0xC991AF78518b7b8D29Ac65c57BBFBbeE40f12Eed",
        ERC20BalanceGteEnforcer: "0x255A63312a0542F7246e6331C1784E836cd2Fdb7",
        ERC20TransferAmountEnforcer: "0x133450F7cE925eB490FC2F3999c7e7c90ef4c797",
        IdEnforcer: "0xB1F5ff662C99127074A428B255ed0a1855Fe1471",
        LimitedCallsEnforcer: "0xf9bc9e9aE0c6999E813AfB8e31089124b2A30b29",
        NonceEnforcer: "0x2Fac192854Fba4f339238372D9d621549e8b9Ace",
        TimestampEnforcer: "0xDD805E67B40B4D3fd8BB2ecb8E92aE83224666B0",
        ValueLteEnforcer: "0x40914D4e2027cd629c320930a8CA3425F1Dd0356",
        NativeTokenTransferAmountEnforcer: "0x3a02B644A7d37a2E42523CA588d17ff55dB189a4",
        NativeBalanceGteEnforcer: "0xD0533Ca270Fa41cAc8bcAF179F481486d05EcB00",
        ArgsEqualityCheckEnforcer: "0x20E2F96E06bA2D4FA300bF2cC542EE33b6121554",
        NativeTokenPaymentEnforcer: "0xA0e93EFCA073B9e4C17dc5d2349e48bd9e7cba09",
        RedeemerEnforcer: "0x32f7FC08188f4d25d82F5E6B50024BbAF3e952A7"
      },
      [CHAIN_ID.morphHolesky]: {
        DelegationManager: "0x68A2c2EaEb80F9cBd88D43E2ee20813A0f560e76",
        EntryPoint: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        SimpleFactory: "0x6ff518884f21168c30c58CB21184D6AdBC18Ad90",
        // Implementations
        MultiSigDeleGatorImpl: "0x9f5F251a46B4aFf31bA9Cc4D46dd31969e4efCd9",
        HybridDeleGatorImpl: "0x0995b21c323E73c684a3976C106a14685029136A",
        // Caveat Enforcers
        AllowedCalldataEnforcer: "0x8601056968510EC8434cAa2e6f7097FaAAb3a542",
        AllowedMethodsEnforcer: "0x16f2D2d1d14934b11dcE576006141D3DE28296a9",
        AllowedTargetsEnforcer: "0x7bB63520f19fc75F2ce0fFE3A1e1206fd88DB32c",
        BlockNumberEnforcer: "0x597B1616ca95916C6c6cE471cb4254aA10a3Fba6",
        DeployedEnforcer: "0xC991AF78518b7b8D29Ac65c57BBFBbeE40f12Eed",
        ERC20BalanceGteEnforcer: "0x255A63312a0542F7246e6331C1784E836cd2Fdb7",
        ERC20TransferAmountEnforcer: "0x133450F7cE925eB490FC2F3999c7e7c90ef4c797",
        IdEnforcer: "0xB1F5ff662C99127074A428B255ed0a1855Fe1471",
        LimitedCallsEnforcer: "0xf9bc9e9aE0c6999E813AfB8e31089124b2A30b29",
        NonceEnforcer: "0x2Fac192854Fba4f339238372D9d621549e8b9Ace",
        TimestampEnforcer: "0xDD805E67B40B4D3fd8BB2ecb8E92aE83224666B0",
        ValueLteEnforcer: "0x40914D4e2027cd629c320930a8CA3425F1Dd0356",
        NativeTokenTransferAmountEnforcer: "0x3a02B644A7d37a2E42523CA588d17ff55dB189a4",
        NativeBalanceGteEnforcer: "0xD0533Ca270Fa41cAc8bcAF179F481486d05EcB00",
        ArgsEqualityCheckEnforcer: "0x20E2F96E06bA2D4FA300bF2cC542EE33b6121554",
        NativeTokenPaymentEnforcer: "0xA0e93EFCA073B9e4C17dc5d2349e48bd9e7cba09",
        RedeemerEnforcer: "0x32f7FC08188f4d25d82F5E6B50024BbAF3e952A7"
      }
    }
  };
  
  export function getDeleGatorEnv(c: any) {
    return {
      DelegationManager: c.DelegationManager,
      EntryPoint: c.EntryPoint,
      SimpleFactory: c.SimpleFactory,
      implementations: {
        MultiSigDeleGatorImpl: c.MultiSigDeleGatorImpl,
        HybridDeleGatorImpl: c.HybridDeleGatorImpl
      },
      caveatEnforcers: {
        AllowedCalldataEnforcer: c.AllowedCalldataEnforcer,
        AllowedMethodsEnforcer: c.AllowedMethodsEnforcer,
        AllowedTargetsEnforcer: c.AllowedTargetsEnforcer,
        ArgsEqualityCheckEnforcer: c.ArgsEqualityCheckEnforcer,
        BlockNumberEnforcer: c.BlockNumberEnforcer,
        DeployedEnforcer: c.DeployedEnforcer,
        ERC20BalanceGteEnforcer: c.ERC20BalanceGteEnforcer,
        ERC20TransferAmountEnforcer: c.ERC20TransferAmountEnforcer,
        IdEnforcer: c.IdEnforcer,
        LimitedCallsEnforcer: c.LimitedCallsEnforcer,
        NonceEnforcer: c.NonceEnforcer,
        TimestampEnforcer: c.TimestampEnforcer,
        ValueLteEnforcer: c.ValueLteEnforcer,
        NativeTokenTransferAmountEnforcer: c.NativeTokenTransferAmountEnforcer,
        NativeBalanceGteEnforcer: c.NativeBalanceGteEnforcer,
        NativeTokenPaymentEnforcer: c.NativeTokenPaymentEnforcer,
        RedeemerEnforcer: c.RedeemerEnforcer
      }
    };
  }