'use strict';

import Base from './base.js';
import conifg from '../../common/config/config.js';

export default class extends Base {
    indexAction() {
        this.assign("id", this.get("apkinfoid"));
        return this.display("staticreport");
    }
    async downloadAction() {
        let apkinfoid = this.get('apkinfoid');
        let apkinfoModel = this.model('apkinfo');
        let reportid = await apkinfoModel.getReportIdByApkinfoid(apkinfoid);

        // let reportUrl = '/opt/andcloud-workspace/' + new String(reportid[0].identify) + '/report.pdf';
        let reportUrl = this.config('reportbaseurl') + new String(reportid[0].identify) + '/report.pdf';


        console.log(reportUrl);
        return this.download(reportUrl);

    }
}