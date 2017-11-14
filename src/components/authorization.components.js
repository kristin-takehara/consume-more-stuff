// Authorization HOC
import React from 'react';

const Authorization = (WrappedComponent, allowedRoles) =>
  return class WithAuthorization extends React.Component {
    constructor(props) {
      super(props)

      // In this case the user is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
      this.state = {
        user: {
          name: '',
          role: ''
        }
      };
    }

    render() {
      const { role } = this.state.user
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />
      } else {
        return <h1>Ah, ah, ah...</h1>
      }
    }
  }