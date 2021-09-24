import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import styles from './Team.module.scss'

export default function Team() {
  return (
    <div className={styles.team__main}>
      <div className={styles.team__container}>
        <p className={styles.team__title}>Team</p>
        <p className={styles.team__subtitle}>
          We are committed to creating and supporting products that help you take care of yourself.
          We are open to suggestions and feedback and willing to share our expertise in mental,
          wellness and productivity.
        </p>
        <div className={styles.team__members}>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/kostya.png'}
              picture2={'/photos/kostya@2x.png'}
              name={'Kostya Shirshov'}
              description={'Team Lead & Management'}
            />
            <div className={styles.team__icons}>
              <Icon picture={'/telegram.svg'} link={'https://t.me/kshirshov'} />
              <Icon picture={'/facebook.svg'} link={'https://www.facebook.com/shirshov.pro'} />
              <Icon picture={'/angel.svg'} link={'https://angel.co/u/shirshov'} />
              <Icon picture={'/linkedin.svg'} link={'https://www.linkedin.com/in/shirshov'} />
            </div>
          </div>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/sergey.png'}
              picture2={'/photos/sergey@2x.png'}
              name={'Sergey Elushev'}
              description={'Team Lead & Development'}
            />
            <div className={styles.team__icons}>
              <Icon
                picture={'/facebook.svg'}
                link={'https://www.facebook.com/profile.php?id=100001789163215'}
              />
              <Icon
                picture={'/linkedin.svg'}
                link={'https://www.linkedin.com/in/sergey-elushev-909724aa/'}
              />
            </div>
          </div>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/alexeym.png'}
              picture2={'/photos/alexeym@2x.png'}
              name={'Alexey Masalov'}
              description={'Development'}
            />
            <div className={styles.team__icons}>
              <Icon picture={'/facebook.svg'} link={'https://www.facebook.com/columbp'} />
            </div>
          </div>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/alexeyd.png'}
              picture2={'/photos/alexeyd@2x.png'}
              name={'Alexey Delendik'}
              description={'Development'}
            />
            <div className={styles.team__icons}>
              <Icon picture={'/telegram.svg'} link={'https://t.me/DelendikAlexey'} />
              <Icon picture={'/facebook.svg'} link={'https://www.facebook.com/alexey.delendik/'} />
            </div>
          </div>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/alexandr.png'}
              picture2={'/photos/alexandr@2x.png'}
              name={'Alexandr Shapovalov'}
              description={'Marketing'}
            />
            <div className={styles.team__icons}>
              <Icon picture={'/telegram.svg'} link={'https://t.me/sidim_tuta'} />
              <Icon
                picture={'/facebook.svg'}
                link={'https://www.facebook.com/alexandr.shapovalov.142'}
              />
            </div>
          </div>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/anna.png'}
              picture2={'/photos/anna@2x.png'}
              name={'Anna Lakhotkina'}
              description={'Marketing'}
            />
            <div className={styles.team__icons}>
              <Icon picture={'/telegram.svg'} link={'https://t.me/Ann1697'} />
              <Icon picture={'/facebook.svg'} link={'https://www.facebook.com/anya.lakhotkina'} />
            </div>
          </div>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/alex.png'}
              picture2={'/photos/alex@2x.png'}
              name={'Alex Sligan'}
              description={'Analytics'}
            />
            <div className={styles.team__icons}>
              <Icon picture={'/telegram.svg'} link={'https://t.me/sligan'} />
              <Icon picture={'/facebook.svg'} link={'https://www.facebook.com/alexandr.sligan.1'} />
            </div>
          </div>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/denis.png'}
              picture2={'/photos/denis@2x.png'}
              name={'Denis Vorontsov'}
              description={'QA'}
            />
            <div className={styles.team__icons}>
              <Icon picture={'/telegram.svg'} link={'https://t.me/dvorontsov'} />
            </div>
          </div>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/artem.png'}
              picture2={'/photos/artem@2x.png'}
              name={'Artem Milovanov'}
              description={'Design'}
            />
            <div className={styles.team__icons}>
              <Icon picture={'/telegram.svg'} link={'https://t.me/winkeyless'} />
              <Icon picture={'/facebook.svg'} link={'https://www.facebook.com/winkeyless1'} />
            </div>
          </div>
          <div className={styles.team__member}>
            <Card
              picture={'/photos/pavel.png'}
              picture2={'/photos/pavel@2x.png'}
              name={'Paul Mit'}
              description={'Advising'}
            />
            <div className={styles.team__icons}>
              <Icon picture={'/telegram.svg'} link={'https://t.me/PavelMitu'} />
              <Icon picture={'/facebook.svg'} link={'https://www.facebook.com/pavel.mityukhin'} />
              <Icon
                picture={'/linkedin.svg'}
                link={'https://www.linkedin.com/in/pavelmityukhin/'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
