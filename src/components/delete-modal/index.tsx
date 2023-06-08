import * as Styles from "./styles";

interface deleteModalProps {
  isDeleteModalOpen: boolean;
  ToggleDeleteModal: () => void;
  fetchPosts(): Promise<void>;
  id: number;
}

export function DeleteModal(props: deleteModalProps) {
  const { isDeleteModalOpen, ToggleDeleteModal, fetchPosts, id } = props;

  async function DeletePost() {
    await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: "DELETE",
    }).then(() => {
      ToggleDeleteModal();
      fetchPosts();
    });
  }

  return (
    <Styles.DeleteModal className={isDeleteModalOpen ? "" : "hidden"}>
      <Styles.DeleteDiv>
        <Styles.DeleteModalTitle>
          Are you sure you want to delete this item?
        </Styles.DeleteModalTitle>
        <Styles.ButtonsDiv>
          <Styles.CancelButton onClick={ToggleDeleteModal}>
            Cancel
          </Styles.CancelButton>
          <Styles.DeleteButton onClick={DeletePost}>Delete</Styles.DeleteButton>
        </Styles.ButtonsDiv>
      </Styles.DeleteDiv>
    </Styles.DeleteModal>
  );
}
