// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package tls

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get the public key from a PEM-encoded private key for use in other
// resources.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-tls/blob/master/website/docs/d/public_key.html.markdown.
func LookupPublicKey(ctx *pulumi.Context, args *GetPublicKeyArgs) (*GetPublicKeyResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["privateKeyPem"] = args.PrivateKeyPem
	}
	outputs, err := ctx.Invoke("tls:index/getPublicKey:getPublicKey", inputs)
	if err != nil {
		return nil, err
	}
	return &GetPublicKeyResult{
		Algorithm: outputs["algorithm"],
		PrivateKeyPem: outputs["privateKeyPem"],
		PublicKeyFingerprintMd5: outputs["publicKeyFingerprintMd5"],
		PublicKeyOpenssh: outputs["publicKeyOpenssh"],
		PublicKeyPem: outputs["publicKeyPem"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getPublicKey.
type GetPublicKeyArgs struct {
	// The private key to use. Currently-supported key types are "RSA" or "ECDSA".
	PrivateKeyPem interface{}
}

// A collection of values returned by getPublicKey.
type GetPublicKeyResult struct {
	Algorithm interface{}
	// The private key data in PEM format.
	PrivateKeyPem interface{}
	// The md5 hash of the public key data in
	// OpenSSH MD5 hash format, e.g. `aa:bb:cc:...`. Only available if the
	// selected private key format is compatible, as per the rules for
	// `public_key_openssh`.
	PublicKeyFingerprintMd5 interface{}
	// The public key data in OpenSSH `authorized_keys`
	// format, if the selected private key format is compatible. All RSA keys
	// are supported, and ECDSA keys with curves "P256", "P384" and "P521"
	// are supported. This attribute is empty if an incompatible ECDSA curve
	// is selected.
	PublicKeyOpenssh interface{}
	// The public key data in PEM format.
	PublicKeyPem interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
