import React  from 'react';
import { InlineLoading, Tabs, TabPanel, TabPanels } from '@carbon/react';
import { formatDatetime, parseDate, ExtensionSlot, ErrorState } from '@openmrs/esm-framework';
import parse from 'html-react-parser';
import { type ReactI18NextChild, useTranslation } from 'react-i18next';
import useIpsResource from '../common/history.resource';
import styles from './history-detail-overview.scss';
import { EmptyState } from '../empty-state';

interface HistoryDetailOverviewProps {
  patientUuid: string;
}

const HistoryDetailOverview: React.FC<HistoryDetailOverviewProps> = ({ patientUuid }) => {
  const { t } = useTranslation();
  const { summaries, error, isLoading } = useIpsResource();

  return (
    <div className={styles.tabs}>
      <Tabs>
        <TabPanels>
          <TabPanel>
            {isLoading ? (
              <InlineLoading description={`${t('loading', 'Loading')} ...`} role="progressbar" />
            ) : error ? (
              <ErrorState headerTitle={t('history', 'Patient History')} error={error} />
            ) : summaries?.entry ? (
              <>
                {summaries.entry.map((summary: { resource: { resourceType: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<ReactI18NextChild>; effectiveDateTime: string; text: { div: any; }; }; }, i: React.Key) => (
                  <div className={styles.container} key={i}>
                    <div className={styles.header}>
                      <div className={styles.historyInfo}>
                        <div>
                          <h4 className={styles.resourceType}>{summary?.resource?.resourceType}</h4>
                          <div className={styles.displayFlex}>
                            <h6 className={styles.dateLabel}>{t('start', 'Start')}:</h6>
                            <span className={styles.date}>{formatDatetime(parseDate(summary?.resource?.effectiveDateTime))}</span>
                            {summary?.resource?.effectiveDateTime ? (
                              <>
                                <h6 className={styles.dateLabel}>{t('end', 'End')}:</h6>
                                <span className={styles.date}>{formatDatetime(parseDate(summary?.resource?.effectiveDateTime))}</span>
                              </>
                            ) : null}
                          </div>
                        </div>
                        <div>
                        </div>
                      </div>
                    </div>
                    {parse(`${summary?.resource?.text?.div}`)}
                  </div>
                ))}
              </>
            ) : (
              <EmptyState headerTitle={t('history', 'Patient History')} displayText={t('history', 'Patient History')} />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default HistoryDetailOverview;
