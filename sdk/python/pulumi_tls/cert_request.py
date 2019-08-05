# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class CertRequest(pulumi.CustomResource):
    cert_request_pem: pulumi.Output[str]
    """
    The certificate request data in PEM format.
    """
    dns_names: pulumi.Output[list]
    """
    List of DNS names for which a certificate is being requested.
    """
    ip_addresses: pulumi.Output[list]
    """
    List of IP addresses for which a certificate is being requested.
    """
    key_algorithm: pulumi.Output[str]
    """
    The name of the algorithm for the key provided
    in `private_key_pem`.
    """
    private_key_pem: pulumi.Output[str]
    subjects: pulumi.Output[list]
    """
    The subject for which a certificate is being requested. This is
    a nested configuration block whose structure is described below.
    """
    def __init__(__self__, resource_name, opts=None, dns_names=None, ip_addresses=None, key_algorithm=None, private_key_pem=None, subjects=None, __name__=None, __opts__=None):
        """
        Create a CertRequest resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] dns_names: List of DNS names for which a certificate is being requested.
        :param pulumi.Input[list] ip_addresses: List of IP addresses for which a certificate is being requested.
        :param pulumi.Input[str] key_algorithm: The name of the algorithm for the key provided
               in `private_key_pem`.
        :param pulumi.Input[list] subjects: The subject for which a certificate is being requested. This is
               a nested configuration block whose structure is described below.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-tls/blob/master/website/docs/r/cert_request.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['dns_names'] = dns_names

        __props__['ip_addresses'] = ip_addresses

        if key_algorithm is None:
            raise TypeError("Missing required property 'key_algorithm'")
        __props__['key_algorithm'] = key_algorithm

        if private_key_pem is None:
            raise TypeError("Missing required property 'private_key_pem'")
        __props__['private_key_pem'] = private_key_pem

        if subjects is None:
            raise TypeError("Missing required property 'subjects'")
        __props__['subjects'] = subjects

        __props__['cert_request_pem'] = None

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(CertRequest, __self__).__init__(
            'tls:index/certRequest:CertRequest',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

