// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Use this data source to get the public key from a PEM-encoded private key for use in other
 * resources.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as fs from "fs";
 * import * as tls from "@pulumi/tls";
 * 
 * const example = pulumi.output(tls.getPublicKey({
 *     privateKeyPem: fs.readFileSync("~/.ssh/id_rsa", "utf-8"),
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-tls/blob/master/website/docs/d/public_key.html.markdown.
 */
export function getPublicKey(args: GetPublicKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicKeyResult> {
    return pulumi.runtime.invoke("tls:index/getPublicKey:getPublicKey", {
        "privateKeyPem": args.privateKeyPem,
    }, opts);
}

/**
 * A collection of arguments for invoking getPublicKey.
 */
export interface GetPublicKeyArgs {
    /**
     * The private key to use. Currently-supported key types are "RSA" or "ECDSA".
     */
    readonly privateKeyPem: string;
}

/**
 * A collection of values returned by getPublicKey.
 */
export interface GetPublicKeyResult {
    readonly algorithm: string;
    /**
     * The private key data in PEM format.
     */
    readonly privateKeyPem: string;
    /**
     * The md5 hash of the public key data in
     * OpenSSH MD5 hash format, e.g. `aa:bb:cc:...`. Only available if the
     * selected private key format is compatible, as per the rules for
     * `public_key_openssh`.
     */
    readonly publicKeyFingerprintMd5: string;
    /**
     * The public key data in OpenSSH `authorized_keys`
     * format, if the selected private key format is compatible. All RSA keys
     * are supported, and ECDSA keys with curves "P256", "P384" and "P521"
     * are supported. This attribute is empty if an incompatible ECDSA curve
     * is selected.
     */
    readonly publicKeyOpenssh: string;
    /**
     * The public key data in PEM format.
     */
    readonly publicKeyPem: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
