import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect('DashboardLogin', {
  clientId: '2oz8BnPV9CfAa93VC3GYQ98DjCfRGRkLwiJ',
  signer: SimpleSigner('0e1ecc7bc0d4268247a5550618a67a9259b28f11011a2860909eb60e45d34a8d')
})

const web3 = uport.getWeb3()
export { web3, uport }
