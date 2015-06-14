import request from '../../../shared/request';
import {Actions} from 'flummox';

export default class TabsActions extends Actions {
    changeDir(tabName, dirName) {
        return request
            .get('/api/ls')
            .query({
                dir_name: dirName
            })
            .exec()
            .then(({body}) => {
                return {
                    tabName: tabName,
                    dirName: body.dirName,
                    fileList: body.list
                };
            });
    }

    changeDirToCwd(tabName) {
        return request
            .get('/api/ls_cwd')
            .exec()
            .then(({body}) => {
                return {
                    tabName: tabName,
                    dirName: body.dirName,
                    fileList: body.list
                };
            });
    }

    selectFile(tabName, fileName) {
        return {tabName, fileName};
    }

    focusTab(tabName) {
        return {tabName};
    }
}
