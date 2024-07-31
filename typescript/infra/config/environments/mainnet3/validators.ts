import { ValidatorBaseChainConfigMap } from '../../../src/config/agent/validator.js';
import { Contexts } from '../../contexts.js';
import { getReorgPeriod } from '../../registry.js';
import { validatorBaseConfigsFn } from '../utils.js';

import { environment } from './chains.js';

export const validatorChainConfig = (
  context: Contexts,
): ValidatorBaseChainConfigMap => {
  const validatorsConfig = validatorBaseConfigsFn(environment, context);
  return {
    ancient8: {
      interval: 5,
      reorgPeriod: getReorgPeriod('ancient8'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0xbb5842ae0e05215b53df4787a29144efb7e67551'],
          [Contexts.ReleaseCandidate]: [
            '0xaae4d879a04e3d8b956eb4ffbefd57fdbed09cae',
          ],
          [Contexts.Neutron]: [],
        },
        'ancient8',
      ),
    },
    celo: {
      interval: 5,
      reorgPeriod: getReorgPeriod('celo'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x63478422679303c3e4fc611b771fa4a707ef7f4a',
            '0x2f4e808744df049d8acc050628f7bdd8265807f9',
            '0x7bf30afcb6a7d92146d5a910ea4c154fba38d25e',
          ],
          [Contexts.ReleaseCandidate]: [
            '0xb51768c1388e976486a43dbbbbf9ce04cf45e990',
            '0x6325de37b33e20089c091950518a471e29c52883',
            '0xd796c1d4fcfb3c63acfa6e4113aa6ae1399b337c',
          ],
          [Contexts.Neutron]: [],
        },
        'celo',
      ),
    },
    ethereum: {
      interval: 5,
      reorgPeriod: getReorgPeriod('ethereum'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x03c842db86a6a3e524d4a6615390c1ea8e2b9541',
            '0x4346776b10f5e0d9995d884b7a1dbaee4e24c016',
            '0x749d6e7ad949e522c92181dc77f7bbc1c5d71506',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x0580884289890805802012b9872afa5ae41a5fa6',
            '0xa5465cb5095a2e6093587e644d6121d6ed55c632',
            '0x87cf8a85465118aff9ec728ca157798201b1e368',
          ],
          [Contexts.Neutron]: [],
        },
        'ethereum',
      ),
    },
    avalanche: {
      interval: 5,
      reorgPeriod: getReorgPeriod('avalanche'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x3fb8263859843bffb02950c492d492cae169f4cf',
            '0xe58c63ad669b946e7c8211299f22679deecc9c83',
            '0x6c754f1e9cd8287088b46a7c807303d55d728b49',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x2c7cf6d1796e37676ba95f056ff21bf536c6c2d3',
            '0xcd250d48d16e2ce4b939d44b5215f9e978975152',
            '0x26691cd3e9c1b8a82588606b31d9d69b14cb2729',
          ],
          [Contexts.Neutron]: [],
        },
        'avalanche',
      ),
    },

    cheesechain: {
      interval: 5,
      reorgPeriod: getReorgPeriod('cheesechain'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x478fb53c6860ae8fc35235ba0d38d49b13128226'],
          [Contexts.ReleaseCandidate]: [
            '0x5f3baa27d61d3ed5fa7606616b8fef443d0a77a4',
          ],
          [Contexts.Neutron]: [],
        },
        'cheesechain',
      ),
    },

    worldchain: {
      interval: 5,
      reorgPeriod: getReorgPeriod('worldchain'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x31048785845325b22817448b68d08f8a8fe36854'],
          [Contexts.ReleaseCandidate]: [
            '0x385a2452930a0681d3ea4e40fb7722095142afcc',
          ],
          [Contexts.Neutron]: [],
        },
        'worldchain',
      ),
    },

    xlayer: {
      interval: 5,
      reorgPeriod: getReorgPeriod('xlayer'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0xa2ae7c594703e988f23d97220717c513db638ea3'],
          [Contexts.ReleaseCandidate]: [
            '0xa68e98cb98190485847581c8004b40ee81cbc723',
          ],
          [Contexts.Neutron]: [],
        },
        'xlayer',
      ),
    },

    polygon: {
      interval: 5,
      reorgPeriod: getReorgPeriod('polygon'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x12ecb319c7f4e8ac5eb5226662aeb8528c5cefac',
            '0x8dd8f8d34b5ecaa5f66de24b01acd7b8461c3916',
            '0xdbf3666de031bea43ec35822e8c33b9a9c610322',
          ],
          [Contexts.ReleaseCandidate]: [
            '0xf0a990959f833ccde624c8bcd4c7669286a57a0f',
            '0x456b636bdde99d69176261d7a4fba42c16f57f56',
            '0xe78d3681d4f59e0768be8b1171f920ed4d52409f',
          ],
          [Contexts.Neutron]: [],
        },
        'polygon',
      ),
    },
    bsc: {
      interval: 5,
      reorgPeriod: getReorgPeriod('bsc'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x570af9b7b36568c8877eebba6c6727aa9dab7268',
            '0x7bf928d5d262365d31d64eaa24755d48c3cae313',
            '0x03047213365800f065356b4a2fe97c3c3a52296a',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x911dfcc19dd5b723e84be452f6af52adef020bc8',
            '0xee2d4fd5fe2170e51c6279552297117feaeb19e1',
            '0x50ff94984161976a13e9ec3b2a7647da5319448f',
          ],
          [Contexts.Neutron]: [],
        },
        'bsc',
      ),
    },
    arbitrum: {
      interval: 5,
      reorgPeriod: getReorgPeriod('arbitrum'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x4d966438fe9e2b1e7124c87bbb90cb4f0f6c59a1',
            '0x6333e110b8a261cab28acb43030bcde59f26978a',
            '0x3369e12edd52570806f126eb50be269ba5e65843',
          ],
          [Contexts.ReleaseCandidate]: [
            '0xb4c18167c163391facb345bb069d12d0430a6a89',
            '0x2f6dc057ae079997f76205903b85c8302164a78c',
            '0x229d4dc6a740212da746b0e35314419a24bc2a5b',
          ],
          [Contexts.Neutron]: [],
        },
        'arbitrum',
      ),
    },
    optimism: {
      interval: 5,
      reorgPeriod: getReorgPeriod('optimism'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x20349eadc6c72e94ce38268b96692b1a5c20de4f',
            '0x04d040cee072272789e2d1f29aef73b3ad098db5',
            '0x779a17e035018396724a6dec8a59bda1b5adf738',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x7e4391786e0b5b0cbaada12d32c931e46e44f104',
            '0x138ca73e805afa14e85d80f6e35c46e6f235429e',
            '0x2d58cdb2bed9aac57b488b1bad06839ddc280a78',
          ],
          [Contexts.Neutron]: [],
        },
        'optimism',
      ),
    },
    osmosis: {
      interval: 5,
      reorgPeriod: getReorgPeriod('osmosis'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0xea483af11c19fa41b16c31d1534c2a486a92bcac'],
          [Contexts.ReleaseCandidate]: [],
          [Contexts.Neutron]: [],
        },
        'osmosis',
      ),
    },
    moonbeam: {
      interval: 5,
      reorgPeriod: getReorgPeriod('moonbeam'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x2225e2f4e9221049456da93b71d2de41f3b6b2a8',
            '0x4fe067bb455358e295bfcfb92519a6f9de94b98e',
            '0xcc4a78aa162482bea43313cd836ba7b560b44fc4',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x75e3cd4e909089ae6c9f3a42b1468b33eec84161',
            '0xc28418d0858a82a46a11e07db75f8bf4eed43881',
            '0xcaa9c6e6efa35e4a8b47565f3ce98845fa638bf3',
          ],
          [Contexts.Neutron]: [],
        },
        'moonbeam',
      ),
    },
    gnosis: {
      interval: 5,
      reorgPeriod: getReorgPeriod('gnosis'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0xd4df66a859585678f2ea8357161d896be19cc1ca',
            '0x06a833508579f8b59d756b3a1e72451fc70840c3',
            '0xb93a72cee19402553c9dd7fed2461aebd04e2454',
          ],
          [Contexts.ReleaseCandidate]: [
            '0xd5122daa0c3dfc94a825ae928f3ea138cdb6a2e1',
            '0x2d1f367e942585f8a1c25c742397dc8be9a61dee',
            '0x2111141b7f985d305f392c502ad52dd74ef9c569',
          ],
          [Contexts.Neutron]: [],
        },
        'gnosis',
      ),
    },
    base: {
      interval: 5,
      reorgPeriod: getReorgPeriod('base'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0xb9453d675e0fa3c178a17b4ce1ad5b1a279b3af9',
            '0x4512985a574cb127b2af2d4bb676876ce804e3f8',
            '0xb144bb2f599a5af095bc30367856f27ea8a8adc7',
          ],
          [Contexts.ReleaseCandidate]: [
            '0xa8363570749080c7faa1de714e0782ff444af4cc',
            '0x3b55d9febe02a9038ef8c867fa8bbfdd8d70f9b8',
            '0xed7703e06572768bb09e03d88e6b788d8800b9fb',
          ],
          [Contexts.Neutron]: [],
        },
        'base',
      ),
    },
    bob: {
      interval: 5,
      reorgPeriod: getReorgPeriod('bob'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x20f283be1eb0e81e22f51705dcb79883cfdd34aa'],
          [Contexts.ReleaseCandidate]: [],
          [Contexts.Neutron]: [],
        },
        'bob',
      ),
    },
    injective: {
      interval: 5,
      reorgPeriod: getReorgPeriod('injective'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0xbfb8911b72cfb138c7ce517c57d9c691535dc517'],
          [Contexts.ReleaseCandidate]: [],
          [Contexts.Neutron]: [],
        },
        'injective',
      ),
    },
    inevm: {
      interval: 5,
      reorgPeriod: getReorgPeriod('inevm'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0xf9e35ee88e4448a3673b4676a4e153e3584a08eb',
            '0xae3e6bb6b3ece1c425aa6f47adc8cb0453c1f9a2',
            '0xd98c9522cd9d3e3e00bee05ff76c34b91b266ec3',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x52a0376903294c796c091c785a66c62943d99aa8',
            '0xc2ea1799664f753bedb9872d617e3ebc60b2e0ab',
            '0xe83d36fd00d9ef86243d9f7147b29e98d11df0ee',
          ],
          [Contexts.Neutron]: [],
        },
        'inevm',
      ),
    },
    fraxtal: {
      interval: 5,
      reorgPeriod: getReorgPeriod('fraxtal'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x4bce180dac6da60d0f3a2bdf036ffe9004f944c1'],
          [Contexts.ReleaseCandidate]: [
            '0x8c772b730c8deb333dded14cb462e577a06283da',
          ],
          [Contexts.Neutron]: [],
        },
        'fraxtal',
      ),
    },
    linea: {
      interval: 5,
      reorgPeriod: getReorgPeriod('linea'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0xf2d5409a59e0f5ae7635aff73685624904a77d94'],
          [Contexts.ReleaseCandidate]: [
            '0xad4886b6f5f5088c7ae53b69d1ff5cfc2a17bec4',
          ],
          [Contexts.Neutron]: [],
        },
        'linea',
      ),
    },
    mantle: {
      interval: 5,
      reorgPeriod: getReorgPeriod('mantle'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0xf930636c5a1a8bf9302405f72e3af3c96ebe4a52'],
          [Contexts.ReleaseCandidate]: [],
          [Contexts.Neutron]: [],
        },
        'mantle',
      ),
    },
    sei: {
      interval: 5,
      reorgPeriod: getReorgPeriod('sei'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x9920d2dbf6c85ffc228fdc2e810bf895732c6aa5'],
          [Contexts.ReleaseCandidate]: [
            '0x846e48a7e85e5403cc690a347e1ad3c3dca11b6e',
          ],
          [Contexts.Neutron]: [],
        },
        'sei',
      ),
    },
    scroll: {
      interval: 5,
      reorgPeriod: getReorgPeriod('scroll'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0xad557170a9f2f21c35e03de07cb30dcbcc3dff63',
            '0xb37fe43a9f47b7024c2d5ae22526cc66b5261533',
            '0x7210fa0a6be39a75cb14d682ebfb37e2b53ecbe5',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x11387d89856219cf685f22781bf4e85e00468d54',
            '0x64b98b96ccae6e660ecf373b5dd61bcc34fd19ee',
            '0x07c2f32a402543badc3141f6b98969d75ef2ac28',
          ],
          [Contexts.Neutron]: [],
        },
        'scroll',
      ),
    },
    solana: {
      interval: 5,
      reorgPeriod: getReorgPeriod('solana'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['', '', ''],
          [Contexts.ReleaseCandidate]: [''],
          [Contexts.Neutron]: [],
        },
        'solana',
      ),
    },
    taiko: {
      interval: 5,
      reorgPeriod: getReorgPeriod('taiko'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0xa930073c8f2d0b2f7423ea32293e0d1362e65d79'],
          [Contexts.ReleaseCandidate]: [],
          [Contexts.Neutron]: [],
        },
        'taiko',
      ),
    },
    polygonzkevm: {
      interval: 5,
      reorgPeriod: getReorgPeriod('polygonzkevm'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x86f2a44592bb98da766e880cfd70d3bbb295e61a',
            '0xc84076030bdabaabb9e61161d833dd84b700afda',
            '0x6a1da2e0b7ae26aaece1377c0a4dbe25b85fa3ca',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x75cffb90391d7ecf58a84e9e70c67e7b306211c0',
            '0x82c10acb56f3d7ed6738b61668111a6b5250283e',
            '0x1cd73544c000fd519784f56e59bc380a5fef53d6',
          ],
          [Contexts.Neutron]: [],
        },
        'polygonzkevm',
      ),
    },
    neutron: {
      interval: 5,
      reorgPeriod: getReorgPeriod('neutron'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0xa9b8c1f4998f781f958c63cfcd1708d02f004ff0',
            '0x60e890b34cb44ce3fa52f38684f613f31b47a1a6',
            '0x7885fae56dbcf5176657f54adbbd881dc6714132',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x307a8fe091b8273c7ce3d277b161b4a2167279b1',
            '0xb825c1bd020cb068f477b320f591b32e26814b5b',
            '0x0a5b31090d4c3c207b9ea6708f938e328f895fce',
          ],
          [Contexts.Neutron]: [],
        },
        'neutron',
      ),
    },
    mantapacific: {
      interval: 5,
      reorgPeriod: getReorgPeriod('mantapacific'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: [
            '0x8e668c97ad76d0e28375275c41ece4972ab8a5bc',
            '0x80afdde2a81f3fb056fd088a97f0af3722dbc4f3',
            '0x5dda0c4cf18de3b3ab637f8df82b24921082b54c',
          ],
          [Contexts.ReleaseCandidate]: [
            '0x84fcb05e6e5961df2dfd9f36e8f2b3e87ede7d76',
            '0x45f3e2655a08feda821ee7b495cf2595401e1569',
            '0x4cfccfd66dbb702b643b56f6986a928ed1b50c7e',
          ],
          [Contexts.Neutron]: [],
        },
        'mantapacific',
      ),
    },
    viction: {
      interval: 5,
      reorgPeriod: getReorgPeriod('viction'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x1f87c368f8e05a85ef9126d984a980a20930cb9c'],
          [Contexts.ReleaseCandidate]: [
            '0xe858971cd865b11d3e8fb6b6af72db0d85881baf',
            '0xad94659e2383214e4a1c4e8d3c17caffb75bc31b',
            '0x0f9e5775ac4d3b73dd28e5a3f8394443186cb70c',
          ],
          [Contexts.Neutron]: [],
        },
        'viction',
      ),
    },
    blast: {
      interval: 5,
      reorgPeriod: getReorgPeriod('blast'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0xf20c0b09f597597c8d2430d3d72dfddaf09177d1'],
          [Contexts.ReleaseCandidate]: [
            '0x5b32f226e472da6ca19abfe1a29d5d28102a2d1a',
          ],
          [Contexts.Neutron]: [],
        },
        'blast',
      ),
    },
    mode: {
      interval: 5,
      reorgPeriod: getReorgPeriod('mode'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x7eb2e1920a4166c19d6884c1cec3d2cf356fc9b7'],
          [Contexts.ReleaseCandidate]: [
            '0x2f04ed30b1c27ef8e9e6acd360728d9bd5c3a9e2',
          ],
          [Contexts.Neutron]: [],
        },
        'mode',
      ),
    },
    redstone: {
      interval: 5,
      reorgPeriod: getReorgPeriod('redstone'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x1400b9737007f7978d8b4bbafb4a69c83f0641a7'],
          [Contexts.ReleaseCandidate]: [
            '0x51ed7127c0afc0513a0f141e910c5e02b2a9a4b5',
          ],
          [Contexts.Neutron]: [],
        },
        'redstone',
      ),
    },
    zetachain: {
      interval: 5,
      reorgPeriod: getReorgPeriod('zetachain'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0xa3bca0b80317dbf9c7dce16a16ac89f4ff2b23ef'],
          [Contexts.ReleaseCandidate]: [
            '0xa13d146b47242671466e4041f5fe68d22a2ffe09',
          ],
          [Contexts.Neutron]: [],
        },
        'zetachain',
      ),
    },
    endurance: {
      interval: 5,
      reorgPeriod: getReorgPeriod('endurance'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x28c5b322da06f184ebf68693c5d19df4d4af13e5'],
          [Contexts.ReleaseCandidate]: [],
          [Contexts.Neutron]: [],
        },
        'endurance',
      ),
    },
    fusemainnet: {
      interval: 5,
      reorgPeriod: getReorgPeriod('fusemainnet'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x770c8ec9aac8cec4b2ead583b49acfbc5a1cf8a9'],
          [Contexts.ReleaseCandidate]: [],
          [Contexts.Neutron]: [],
        },
        'fusemainnet',
      ),
    },
    zoramainnet: {
      interval: 5,
      reorgPeriod: getReorgPeriod('zoramainnet'),
      validators: validatorsConfig(
        {
          [Contexts.Hyperlane]: ['0x35130945b625bb69b28aee902a3b9a76fa67125f'],
          [Contexts.ReleaseCandidate]: [],
          [Contexts.Neutron]: [],
        },
        'zoramainnet',
      ),
    },
  };
};
