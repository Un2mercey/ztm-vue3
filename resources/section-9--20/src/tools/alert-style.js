import { ALERT_TYPE } from "@/tools/constants";

const getAlertStyle = (type) => {
    switch (type) {
        case ALERT_TYPE.SUCCESS:
            return "bg-green-500";
        case ALERT_TYPE.WARNING:
            return "bg-orange-500";
        case ALERT_TYPE.ERROR:
            return "bg-red-500";
        case ALERT_TYPE.PENDING:
            return "bg-blue-500";
        default:
            return "";
    }
};

export default getAlertStyle;
