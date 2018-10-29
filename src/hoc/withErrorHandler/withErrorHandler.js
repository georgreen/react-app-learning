import React, {Component} from 'react';

import Aux from '../aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {

  return class extends Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.resInterceptor = axios.interceptors.response.use( res => res, error => {
        this.setState({error: error});
      });

      this.reqInterceptoraxios = axios.interceptors.request.use( req => {
        this.setState({error: null});
        return req;
      });

    }

    componentWillUnmount() {
      axios.interceptors.response.eject(this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptoraxios);
    }

    errorConfirmed = _ => {
      this.setState({error: null});
    }

    render() {
      const modal = this.state.error
      ? <Modal show = {this.state.error} clickBackdrop = {this.errorConfirmed}>
          {this.state.error ? this.state.error.message : null}
        </Modal>
      : null;

      return (
        <Aux>
          {modal}
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;
