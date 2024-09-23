export interface ClerkError {
	code: string;
	message: string;
	longMessage?: string;
	meta?: Record<string, any>;
}

export type ClerkErrorCode =
	// Actor Tokens
	| "actor_token_invalid"
	// Allowlist Identifiers
	| "allowlist_identifier_not_found"
	| "allowlist_identifier_exists"
	// Application
	| "application_not_found"
	| "application_instance_not_found"
	| "application_instance_not_active"
	// Backup Codes
	| "backup_code_incorrect"
	| "backup_code_already_used"
	// Billing
	| "billing_payment_method_required"
	| "billing_plan_upgrade_required"
	// Billing Accounts
	| "billing_account_not_found"
	// Blocklist Identifiers
	| "blocklist_identifier_exists"
	| "blocklist_identifier_not_found"
	// Clients
	| "client_not_found"
	// Cookie
	| "cookie_invalid"
	| "cookie_expired"
	// Deprecation
	| "deprecated_endpoint"
	// Domains
	| "domain_not_allowed"
	// Entitlements
	| "entitlement_not_found"
	// Features
	| "feature_not_enabled"
	// Forms
	| "form_identifier_exists"
	| "form_identifier_not_found"
	| "form_password_incorrect"
	| "form_password_validation_failed"
	| "form_password_pwned"
	| "form_identifier_verification_failed"
	| "form_identifier_not_verified"
	| "form_identifier_reused"
	| "form_code_incorrect"
	| "form_expired"
	| "form_param_missing"
	| "form_param_format_invalid"
	| "form_params_invalid"
	| "form_reserved_oauth_email"
	// Identifications
	| "identification_not_found"
	| "identification_not_verified"
	| "identification_verification_failed"
	// Passkeys
	| "passkey_not_found"
	| "passkey_already_exists"
	| "passkey_invalid"
	// Rate Limits
	| "rate_limit_exceeded"
	// Sign In
	| "sign_in_unsuccessful"
	| "sign_up_unsuccessful"
	| "oauth_access_denied"
	| "oauth_invalid_request"
	| "oauth_unsupported_response_type"
	| "oauth_invalid_scope"
	| "oauth_server_error"
	| "oauth_temporarily_unavailable"
	| "oauth_authorization_failed"
	| "authentication_factor_not_found"
	| "not_allowed_access"
	| "session_exists"
	| "session_update_not_allowed"
	// Sign Up
	| "strategy_for_identifier_exists"
	| "external_account_exists"
	| "external_account_not_found"
	| "external_account_verification_failed"
	| "web3_signature_verification_failed"
	| "web3_wallet_verification_failed"
	| "web3_invalid_nonce"
	| "web3_address_exists"
	// Sign In Tokens
	| "sign_in_token_invalid"
	| "sign_in_token_expired"
	// General
	| "internal_server_error"
	| "unknown_error";
