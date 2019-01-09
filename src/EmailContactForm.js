import React from 'react';

import { withNamespaces } from 'react-i18next';
import { TextField } from '@material-ui/core';

import { CtaButton, CancelButton } from './Buttons';

const PREFIX = 'contactForm';

class EmailContactForm extends React.Component {

  initState = () => ({
    email: this.getContactFormInfo('email'),
    subject: this.getContactFormInfo('subject'),
    body: this.getContactFormInfo('body')
  });

  state = this.initState();

  setContactFormInfo(key, val) {

    this.setState({ [key]: val });

    const keyWithPrefix = `${PREFIX}.${key}`;

    if (!val) {
      window.localStorage.removeItem(keyWithPrefix);
    } else {
      window.localStorage.setItem(keyWithPrefix, val);
    }
  }

  getContactFormInfo(key) {
    return window.localStorage[`${PREFIX}.${key}`] || '';
  }

  clearContactFormInfo = () => {
    Object.keys(window.localStorage).forEach(key => {
      if (key.slice(0, PREFIX.length + 1) === `${PREFIX}.`) {
        window.localStorage.removeItem(key);
      }
    });

    this.setState(this.initState());
  }

  render() {

    const { t } = this.props;

    return (
      <form action='' method='post'>

        <TextField
          id='email'
          name='email'
          label={t('ui.email.yourEmail')}
          type='email'
          autoComplete='email'
          fullWidth
          margin='normal'
          value={this.state.email}
          onChange={e => this.setContactFormInfo('email', e.currentTarget.value)}
        />

        <TextField
          id='subject'
          name='subject'
          label={t('ui.email.subject')}
          fullWidth
          margin='normal'
          value={this.state.subject}
          onChange={e => this.setContactFormInfo('subject', e.currentTarget.value)}
        />

        <TextField
          id='body'
          name='body'
          label={t('ui.email.body')}
          multiline
          rows='8'
          fullWidth
          margin='normal'
          variant='filled'
          value={this.state.body}
          onChange={e => this.setContactFormInfo('body', e.currentTarget.value)}
        />

        <CtaButton text={t('ui.email.send')} type='submit' />

        <CancelButton text={t('ui.email.reset')} type='reset' onClick={this.clearContactFormInfo} />

      </form>
    );
  }
}

export default withNamespaces('translations')(EmailContactForm)