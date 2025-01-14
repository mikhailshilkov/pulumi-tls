// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-tls/blob/master/website/docs/r/private_key.html.markdown.
 */
export class PrivateKey extends pulumi.CustomResource {
    /**
     * Get an existing PrivateKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateKeyState, opts?: pulumi.CustomResourceOptions): PrivateKey {
        return new PrivateKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tls:index/privateKey:PrivateKey';

    /**
     * Returns true if the given object is an instance of PrivateKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateKey.__pulumiType;
    }

    /**
     * The name of the algorithm to use for
     * the key. Currently-supported values are "RSA" and "ECDSA".
     */
    public readonly algorithm!: pulumi.Output<string>;
    /**
     * When `algorithm` is "ECDSA", the name of the elliptic
     * curve to use. May be any one of "P224", "P256", "P384" or "P521", with "P224" as the
     * default.
     */
    public readonly ecdsaCurve!: pulumi.Output<string | undefined>;
    /**
     * The private key data in PEM format.
     */
    public /*out*/ readonly privateKeyPem!: pulumi.Output<string>;
    /**
     * The md5 hash of the public key data in
     * OpenSSH MD5 hash format, e.g. `aa:bb:cc:...`. Only available if the
     * selected private key format is compatible, as per the rules for
     * `publicKeyOpenssh`.
     */
    public /*out*/ readonly publicKeyFingerprintMd5!: pulumi.Output<string>;
    /**
     * The public key data in OpenSSH `authorizedKeys`
     * format, if the selected private key format is compatible. All RSA keys
     * are supported, and ECDSA keys with curves "P256", "P384" and "P521"
     * are supported. This attribute is empty if an incompatible ECDSA curve
     * is selected.
     */
    public /*out*/ readonly publicKeyOpenssh!: pulumi.Output<string>;
    /**
     * The public key data in PEM format.
     */
    public /*out*/ readonly publicKeyPem!: pulumi.Output<string>;
    /**
     * When `algorithm` is "RSA", the size of the generated
     * RSA key in bits. Defaults to 2048.
     */
    public readonly rsaBits!: pulumi.Output<number | undefined>;

    /**
     * Create a PrivateKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivateKeyArgs | PrivateKeyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PrivateKeyState | undefined;
            inputs["algorithm"] = state ? state.algorithm : undefined;
            inputs["ecdsaCurve"] = state ? state.ecdsaCurve : undefined;
            inputs["privateKeyPem"] = state ? state.privateKeyPem : undefined;
            inputs["publicKeyFingerprintMd5"] = state ? state.publicKeyFingerprintMd5 : undefined;
            inputs["publicKeyOpenssh"] = state ? state.publicKeyOpenssh : undefined;
            inputs["publicKeyPem"] = state ? state.publicKeyPem : undefined;
            inputs["rsaBits"] = state ? state.rsaBits : undefined;
        } else {
            const args = argsOrState as PrivateKeyArgs | undefined;
            if (!args || args.algorithm === undefined) {
                throw new Error("Missing required property 'algorithm'");
            }
            inputs["algorithm"] = args ? args.algorithm : undefined;
            inputs["ecdsaCurve"] = args ? args.ecdsaCurve : undefined;
            inputs["rsaBits"] = args ? args.rsaBits : undefined;
            inputs["privateKeyPem"] = undefined /*out*/;
            inputs["publicKeyFingerprintMd5"] = undefined /*out*/;
            inputs["publicKeyOpenssh"] = undefined /*out*/;
            inputs["publicKeyPem"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(PrivateKey.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PrivateKey resources.
 */
export interface PrivateKeyState {
    /**
     * The name of the algorithm to use for
     * the key. Currently-supported values are "RSA" and "ECDSA".
     */
    readonly algorithm?: pulumi.Input<string>;
    /**
     * When `algorithm` is "ECDSA", the name of the elliptic
     * curve to use. May be any one of "P224", "P256", "P384" or "P521", with "P224" as the
     * default.
     */
    readonly ecdsaCurve?: pulumi.Input<string>;
    /**
     * The private key data in PEM format.
     */
    readonly privateKeyPem?: pulumi.Input<string>;
    /**
     * The md5 hash of the public key data in
     * OpenSSH MD5 hash format, e.g. `aa:bb:cc:...`. Only available if the
     * selected private key format is compatible, as per the rules for
     * `publicKeyOpenssh`.
     */
    readonly publicKeyFingerprintMd5?: pulumi.Input<string>;
    /**
     * The public key data in OpenSSH `authorizedKeys`
     * format, if the selected private key format is compatible. All RSA keys
     * are supported, and ECDSA keys with curves "P256", "P384" and "P521"
     * are supported. This attribute is empty if an incompatible ECDSA curve
     * is selected.
     */
    readonly publicKeyOpenssh?: pulumi.Input<string>;
    /**
     * The public key data in PEM format.
     */
    readonly publicKeyPem?: pulumi.Input<string>;
    /**
     * When `algorithm` is "RSA", the size of the generated
     * RSA key in bits. Defaults to 2048.
     */
    readonly rsaBits?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a PrivateKey resource.
 */
export interface PrivateKeyArgs {
    /**
     * The name of the algorithm to use for
     * the key. Currently-supported values are "RSA" and "ECDSA".
     */
    readonly algorithm: pulumi.Input<string>;
    /**
     * When `algorithm` is "ECDSA", the name of the elliptic
     * curve to use. May be any one of "P224", "P256", "P384" or "P521", with "P224" as the
     * default.
     */
    readonly ecdsaCurve?: pulumi.Input<string>;
    /**
     * When `algorithm` is "RSA", the size of the generated
     * RSA key in bits. Defaults to 2048.
     */
    readonly rsaBits?: pulumi.Input<number>;
}
