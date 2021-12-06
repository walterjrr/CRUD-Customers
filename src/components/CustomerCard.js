import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Modal from './Modalconfirm';

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,}
  from '@material-ui/core';

  import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

const CustomerCard = ({name, lastname, email, avatar, classname, onRemoveCustomer, onEditCustomer, id}) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  const handleEditCustomer = id => {
    onEditCustomer(id)
  }

  return (
    <>
      <Card className={classNames(classname, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="editar" onClick={() =>handleEditCustomer(id)}>
            <Edit />
          </IconButton>
          <IconButton aria-label="remover" onClick={handleRemoveCustomer}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
      <Modal
      open={openModal} 
      onClose={handleToggleOpenModal}
      onConfirm={() => {handleConfirmModal(id)}}
      title="Deseja realmente excluir este cadastro?" 
      message="Ao confirmar não será possivel reverter esta operação"
      />
    </>
  );
}

export default CustomerCard