import React from 'react';
import PropTypes from 'prop-types';
import * as Sentry from "@sentry/react";

import { coreEvents } from '@folio/stripes/core';
import { errorLogging } from 'stripes-config';

/**
 * Log ERROR events to Sentry.
 * @see https://sentry.io
 * @see https://docs.sentry.io/platforms/javascript/guides/react/
 *
 */
export default class SentryLogger extends React.Component {
  // eventHandler
  static eventHandler(event) {
    if (event === coreEvents.ERROR) {
      console.log('configuring sentry')
      Sentry.init({ ...errorLogging.sentry });

      return (error, info) => {
        Sentry.captureException({error, info});
      };
    }

    return null;
  }

  render() {
    return <></>;
  }
}
