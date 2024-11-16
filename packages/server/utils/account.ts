import { PrivateKeyToAccountOptions, SignAuthorizationReturnType, toAccount } from "viem/accounts"
import { transactionClient } from "./multibaas"
import { PrivateKeyAccount, serializeTransaction } from "viem"
import { Authorization } from "viem/experimental"

export const getCurvegrideAccount = (options: PrivateKeyToAccountOptions = {}) => {
    const account = toAccount({
        address: "0x0297d4570023132Ea881c3244807Badb6cfB8F59",
        ...options,
        async signMessage({ message }) {
            const client = await transactionClient()
            const signedMessage = await client.signData(
                "ethereum",
                {
                    address: "0x0297d4570023132Ea881c3244807Badb6cfB8F59",
                    data: message.toString(),
                }
            )
            return signedMessage.data.result.signature as `0x${string}`
        },
        async experimental_signAuthorization(parameters: Authorization): Promise<SignAuthorizationReturnType> {
            throw new Error("Function not implemented.")
        },


        async signTransaction(transaction) {
            const client = await transactionClient()

            const signedMessage = await client.signData(
                "ethereum",
                {
                    address: "0x0297d4570023132Ea881c3244807Badb6cfB8F59",
                    data: serializeTransaction(transaction),
                    chainId: transaction.chainId,
                }
            )
            
            console.log(signedMessage.data.result.signature);
            return signedMessage.data.result.signature as `0x${string}`
        },
        async sign({ hash }) {
            const client = await transactionClient()
            console.log(hash)
            const signedMessage = await client.signData(
                "ethereum",
                {
                    address: "0x0297d4570023132Ea881c3244807Badb6cfB8F59",
                    data: hash,
                }
            )
            return signedMessage.data.result.signature as `0x${string}`
        },
        async signTypedData(typedData) {
            const client = await transactionClient()
            const signedMessage = await client.signData(
                "ethereum",
                {
                    address: "0x0297d4570023132Ea881c3244807Badb6cfB8F59",
                    data: JSON.parse(JSON.stringify(typedData, (key, value) =>
                        typeof value === 'bigint'
                            ? value.toString()
                            : value // return everything else unchanged
                    )),
                    isTyped: true

                }
            )

            return signedMessage.data.result.signature as `0x${string}`
        },
        source: "multibaas",
        type: "local"
    }) as PrivateKeyAccount

    return account
}