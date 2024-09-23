import type {ClerkErrorCode} from "@/types/ClerkErrorTypes";

export const clerkErrorMap: Record<ClerkErrorCode, string> = {
	// Actor Tokens
	actor_token_invalid: "The provided actor token is invalid.",
	// Allowlist Identifiers
	allowlist_identifier_not_found: "The allowlist identifier was not found.",
	allowlist_identifier_exists: "The allowlist identifier already exists.",
	// Application
	application_not_found: "The requested application was not found.",
	application_instance_not_found: "The application instance was not found.",
	application_instance_not_active: "The application instance is not active.",
	// Backup Codes
	backup_code_incorrect: "The provided backup code is incorrect.",
	backup_code_already_used: "The provided backup code has already been used.",
	// Billing
	billing_payment_method_required:
		"A payment method is required for this action.",
	billing_plan_upgrade_required: "A plan upgrade is required for this action.",
	// Billing Accounts
	billing_account_not_found: "The billing account was not found.",
	// Blocklist Identifiers
	blocklist_identifier_exists: "The identifier is blocklisted.",
	blocklist_identifier_not_found: "The blocklist identifier was not found.",
	// Clients
	client_not_found: "The requested client was not found.",
	// Cookie
	cookie_invalid: "The provided cookie is invalid.",
	cookie_expired: "The provided cookie has expired.",
	// Deprecation
	deprecated_endpoint: "This endpoint is deprecated.",
	// Domains
	domain_not_allowed: "The domain is not allowed.",
	// Entitlements
	entitlement_not_found: "The requested entitlement was not found.",
	// Features
	feature_not_enabled: "This feature is not enabled for your account.",
	// Forms
	form_identifier_exists: "The identifier already exists.",
	form_identifier_not_found: "The identifier was not found.",
	form_password_incorrect: "The provided password is incorrect.",
	form_password_validation_failed:
		"The password does not meet the required criteria.",
	form_password_pwned: "The password has been compromised in a data breach.",
	form_identifier_verification_failed: "Verification of the identifier failed.",
	form_identifier_not_verified: "The identifier has not been verified.",
	form_identifier_reused: "The identifier has been used too many times.",
	form_code_incorrect: "The provided verification code is incorrect.",
	form_expired: "The form or code has expired.",
	form_param_missing: "A required parameter is missing.",
	form_param_format_invalid: "A parameter has an invalid format.",
	form_params_invalid: "Multiple parameters are invalid.",
	form_reserved_oauth_email:
		"This email is reserved for OAuth and cannot be used.",
	// Identifications
	identification_not_found: "The identification was not found.",
	identification_not_verified: "The identification has not been verified.",
	identification_verification_failed:
		"Verification of the identification failed.",
	// Passkeys
	passkey_not_found: "The passkey was not found.",
	passkey_already_exists: "A passkey already exists for this account.",
	passkey_invalid: "The passkey is invalid.",
	// Rate Limits
	rate_limit_exceeded: "Rate limit has been exceeded.",
	// Sign In
	sign_in_unsuccessful: "Sign in was unsuccessful.",
	sign_up_unsuccessful: "Sign up was unsuccessful.",
	oauth_access_denied: "OAuth access was denied.",
	oauth_invalid_request: "The OAuth request was invalid.",
	oauth_unsupported_response_type: "The OAuth response type is not supported.",
	oauth_invalid_scope: "The OAuth scope is invalid.",
	oauth_server_error: "An error occurred on the OAuth server.",
	oauth_temporarily_unavailable:
		"The OAuth service is temporarily unavailable.",
	oauth_authorization_failed: "OAuth authorization failed.",
	authentication_factor_not_found: "The authentication factor was not found.",
	not_allowed_access: "Access is not allowed.",
	session_exists: "A session already exists.",
	session_update_not_allowed: "Updating the session is not allowed.",
	// Sign Up
	strategy_for_identifier_exists:
		"An account with this identifier already exists.",
	external_account_exists: "An external account already exists.",
	external_account_not_found: "The external account was not found.",
	external_account_verification_failed:
		"Verification of the external account failed.",
	web3_signature_verification_failed:
		"Verification of the Web3 signature failed.",
	web3_wallet_verification_failed: "Verification of the Web3 wallet failed.",
	web3_invalid_nonce: "The Web3 nonce is invalid.",
	web3_address_exists: "An account with this Web3 address already exists.",
	// Sign In Tokens
	sign_in_token_invalid: "The sign-in token is invalid.",
	sign_in_token_expired: "The sign-in token has expired.",
	// General
	internal_server_error: "An internal server error occurred.",
	unknown_error: "An unknown error occurred.",
};
