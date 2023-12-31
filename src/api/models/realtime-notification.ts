/* tslint:disable */
/* eslint-disable */
export interface RealtimeNotification {

  /**
   * Configuration parameters for the current connect message.
   */
  advice?: {

/**
 * Period (milliseconds) after which the server will close the session, if it doesn't received the next connect message from the client. Overrides server default settings for current request-response conversation.
 */
'interval'?: number;

/**
 * Interval (milliseconds) between the sending of the connect message and the response from the server. Overrides server default settings for the current request-response conversation.
 */
'timeout'?: number;
};

  /**
   * The channel name as a URI.
   */
  channel: '/meta/handshake' | '/meta/subscribe' | '/meta/unsubscribe' | '/meta/connect' | '/meta/disconnect';

  /**
   * Unique client ID generated by the server during handshake. Required for all other operations.
   */
  clientId?: string;

  /**
   * Selected connection type.
   */
  connectionType?: string;

  /**
   * List of notifications from the channel.
   */
  data?: null | {
};

  /**
   * Operation failure reason (only present if the operation was not successful).
   */
  error?: string;

  /**
   * Authentication object passed to handshake (only over WebSockets).
   */
  ext?: {
'com.cumulocity.authn'?: {

/**
 * Base64 encoded credentials.
 */
'token'?: string;

/**
 * Optional two factor authentication token.
 */
'tfa'?: string;

/**
 * Required for OAuth authentication.
 */
'xsrfToken'?: string;
};

/**
 * The system of units to use.
 */
'systemOfUnits'?: 'imperial' | 'metric';
};

  /**
   * ID of the message passed in a request. Required to match the response message.
   */
  id?: string;

  /**
   * Minimum server-side Bayeux protocol version required by the client (in a request) or minimum client-side Bayeux protocol version required by the server (in a response).
   */
  minimumVersion?: string;

  /**
   * Name of the channel to subscribe to. Subscription channels are available for [Alarms](#tag/Alarm-notification-API), [Device control](#tag/Device-control-notification-API), [Events](#tag/Event-notification-API), [Inventory](#tag/Inventory-notification-API) and [Measurements](#tag/Measurement-notification-API).
   */
  subscription?: string;

  /**
   * Indicates if the operation was successful.
   */
  successful?: boolean;

  /**
   * Connection types supported by both client and server, that is, intersection between client and server options.
   */
  supportedConnectionTypes?: Array<string>;

  /**
   * [Bayeux protocol](https://docs.cometd.org/current/reference/#_concepts_bayeux_protocol) version used by the client (in a request) or server (in a response).
   */
  version?: string;
}
