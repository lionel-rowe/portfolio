import React from 'react';
import SkillIcon from './SkillIcon';
import { withNamespaces } from 'react-i18next';
import { Grid, Typography } from '@material-ui/core';

const SkillsSection = props => {
  const { t } = props;

  return (
    <Grid item xs={12} sm={12} md={10} lg={8} xl={6} component='section'>
      <Typography variant='h1'>{t('ui.skills')}</Typography>
      <div className='skills-list'>
        {t('skills', { returnObjects: true }).map((skill, idx) => <SkillIcon skill={skill} key={idx} />)}
      </div>
      </Grid>
  );
}

export default withNamespaces('translations')(SkillsSection);
