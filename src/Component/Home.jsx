import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  let data={
    name: '',
    email: '',
  }
  const [info, setInfo] = useState({data});
  const [flag, setFlag] = useState(false);

  const { t, i18n } = useTranslation('global');

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
    setInfo(data);
  };

  return (
    <div>
      <button onClick={() => handleLangChange('en')}>English</button>
      <br /><br />
      <button onClick={() => handleLangChange('es')}>Spanish</button>
      <br /><br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e)=>data.name=e.target.value}
          placeholder={t("formdata.name")}
        />
        <br /><br />
        <input
          type="text"
          name="email"
          placeholder={t("formdata.email")}
          onChange={(e)=>data.email=e.target.value}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
        { flag &&
          <div>
            <p>{t('data.name')}: {info.name}</p>
            <p>{t('data.msg')}: {info.email}</p>
          </div>
        }
        
    </div>
  );
};
