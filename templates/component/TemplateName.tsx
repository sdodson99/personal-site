import React from 'react';
import styles from './TemplateName.module.css';

type TemplateNameProps = {};

export const TemplateName = ({}: TemplateNameProps) => (
  <div className={styles.templateName} data-testid="TemplateName">
    TemplateName Component
  </div>
);
