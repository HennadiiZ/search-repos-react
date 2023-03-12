import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div class={styles.lds_spinner}>
      <div>
        </div>
          <div>
            </div>
              <div>
                </div>
                  <div>
                    </div>
                      <div>
                        </div>
                          <div>
                          </div>
                          <div>
                          </div>
                          <div>
                        </div>
                      <div>
                    </div>
                  <div>
                </div>
              <div>
            </div>
          <div>
      </div>
    </div>
  );
};

export default Spinner;