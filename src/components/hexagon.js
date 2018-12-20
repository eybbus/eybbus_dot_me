import React from 'react'
import styles from './hexagon.module.css'

const Hexagon = () => (
  <div className={styles.hex_container}>
    <div className={styles.hex_top_row}>
      <div className={styles.hexagon}>
        <div className={styles.hexagon_in1}>
          <div
            className={styles.hexagon_in2}
            style={{
              'background-image':
                'url(https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/46801498_10218176189893630_97167115311644672_o.jpg?_nc_cat=105&_nc_ht=scontent-lhr3-1.xx&oh=fc61617c4f9d603170b92fe045c26ac5&oe=5CD3EB49)',
            }}
          />
        </div>
      </div>
    </div>
    <div className={styles.hex_bottom_row}>
      <div className={styles.hexagon}>
        <div className={styles.hexagon_in1}>
          <div className={styles.hexagon_in2} />
        </div>
      </div>
      <div className={styles.hexagon}>
        <div className={styles.hexagon_in1}>
          <div className={styles.hexagon_in2} />
        </div>
      </div>
    </div>
  </div>
)
export default Hexagon
/* .hex {
  float: left;
  margin-left: 3px;
  margin-bottom: -26px;
}
.hex .top {
  width: 0;
  border-bottom: 30px solid #6C6;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
}
.hex .middle {
  width: 104px;
  height: 60px;
  background: #6C6;
}
.hex .bottom {
  width: 0;
  border-top: 30px solid #6C6;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
}
.hex-row {
  clear: left;
}
.hex-row.even {
  margin-left: 53px;
} */
