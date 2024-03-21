import { useTranslations } from 'next-intl';
import { FC } from 'react';

interface IAdminPageProps {}

const AdminPage: FC<IAdminPageProps> = () => {
  const t = useTranslations('AdminPage');
  return (
    <>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </>
  );
};
export default AdminPage;
