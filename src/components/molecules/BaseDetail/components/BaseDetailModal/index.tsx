import { Ref } from "react"
import { BaseModalProps } from "../../types"
import Modal from "atoms/Modal";
import { ScrollView } from "react-native";
const BaseDetailModal = (props: BaseModalProps, ref : Ref<any>) => {
    const {children, scrollProps = {}, ...modalProps} = props;

    return (
        <Modal ref={ref} {...modalProps}>
            <ScrollView showsVerticalScrollIndicator={false} {...scrollProps}>
                {children}
            </ScrollView>
        </Modal>
    );
}

export default BaseDetailModal;