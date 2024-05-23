import CustomLink from '../components/links/CustomLink'
import styles from './styles/Pages.module.scss'

//  Расчетный счет:
//  Наименование учреждения банка:
//

const data = [
  {
    name: 'Реквизиты Полное наименование (согласно учредительным документам):',
    value: 'Общество с ограниченной ответственностью "Инайя"',
  },
  {
    name: 'Название компании:',
    value: 'ОсОО Инайя',
  },
  {
    name: 'Адрес местонахождения:',
    value: '720044 г. Бишкек, Первомайский Рн. ул. Ахунбаева, д. 175',
  },
  {
    name: 'ИНН:',
    value: '00504201110214',
  },
  {
    name: 'Телефоны:',
    value: '+79186467285',
  },
  {
    name: 'Почта:',
    value: 'info@inaya.kg',
  },
  {
    name: 'Генеральный директор:',
    value: 'Шекекова Айнур Кемелбековна ',
  },
]
export default function Requisites() {
  return (
    <div className={styles.requisites}>
      <div>
        <CustomLink to={'/'} className="back">
          На Главную
        </CustomLink>
      </div>

      <div className={styles.title}>Реквизиты</div>

      <div className={styles.requisites_content}>
        {data.map((t) => (
          <div className={styles.row} key={t.value}>
            <div className={styles.row_item}>{t.name}</div>
            <div></div>
            <div className={styles.row_item}>{t.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
