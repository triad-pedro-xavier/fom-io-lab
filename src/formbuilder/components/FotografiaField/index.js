import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";

const FotografiaFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEWAgID///97e3t0dHR5eXl9fX3CwsLIyMj7+/vPz8/V1dWTk5OBgYH39/e5ubnl5eXu7u6Li4utra3k5OTe3t6lpaWRkZGIiIifn5/y8vKysrLFxcWZmZnr6+vMzMzU1NR0ZTq2AAAMP0lEQVR4nO2dW5uiMAyGa6WKiMgZUdD//y+3qDMqpKVtgivz+N3szQ70lZ6Spglb/HWx/92AyfUlnL++hPPXl3D++hLOX1/C+etLOH99CeevL+H89SWcv76E89dEhLt9HgSXzWZzPq3X69WPop5Wr+r+73p93lyCIM/38Y6kKZMQ5gVbendxa/385ZKXUYxvzASEbeMJRiLBWYRuDj3hWRDxXeUVPrI95IQrj5BPiqfIBlET7ik/4A1xhWsRNWFDTsjEHtUiYsIVJwdkYosairSEbUgPiO2ntIQFfR/tVLWINpESBhP00U6iQDSKktBPpvmEsp8G7q2iJJximrlJbN1bRUgYV1MByq3N+RMI06n6qJRI6v9PmE8IKEei8xacjnCC3cyzQtcVQ0m4y6QFuz6dfgzX1WmTx5rNxWayaeYm5x24gnCzHZqv0iYNi1z1g0y2Uvwiql7tQlgXKhtWeCnsW5hupfh9dUNHWG81zeUHqKtOuVL8vnlDRlhovwc/An+STv4J5UcsnVxTAGE+YqXzbPAn2dSD8PZiJxsDIBwzEMRwVju8hZBVLq43gHDMxhNlfyROZVP0BQ4Qe8L9qCspbP0X7bbv+YTyx80W3QuRhJtxZ1m5fVH5LkAmqusLm+ZQpNHpot2CqAmPBu0Vr5oeDXiz3IKIqixO2QhlnzAv3thcvCSoSI65DvKVMDsMNjNv/0rWEsJLIvW+/JnQj/ooQoTbIk0PScg/G5KHqcqr+kRYN7z/d825vnYAv12Xb1oRXCVYCq+WD8Ks6n/A8tn/46/Cj/6McrVkK2g8/hIGgx7atyIymlXhNg/eRTvGvRKwsH4IA9Z7E7B/iLGIkiysmiI93k9/oygtmiSU8yHVgaMYbl3vhPngCx6AD75HOO0lXdVEQTvoSH6dr9OSeTSUvOgbIDfCtv8FFZvcjWMr5Jx8OA3hnvtHcCxJeiwvewvHldAfbCwVhorvYkQIXqUbA2egn0dbAkZRva4bV8JosBKECjslsD7hFUIuOeN4P5BphV55RfUy33SE7aDZ4CjstLP0VsiV2NKBVJ8SLKMIn79iRzg0edXWtNX5mQgjB1e1v2mQnVWET6+VhPHwcZ7yrGfYoTXvOTp6cf0zcgclto8ZVRIeh08DXDF3nU0HouAF4lxzdwpRjE/+YwYOLXVwgIF9fHtFiTjy6xSnqK7qnR6EF6DNasKz0U8rWIQPSgtQXfUXgYFzh9qDbjQOObQ/tFeNOa/7PVRlO+gpXHkgabLke4XzYV9PZ4Q9493XAwau4er1cHxnKthJ8ccO2iM2+/clAyZUntaNn6GJhKSH/qjWHzHodLeOFIQC9r36o8egosTFaA1f6X4kImINYed7BbQeA+RbqiH4kMUmo9eYo5YQCg3Ixnal/EATuUyFuNMQMtEMENuxc95pAMFdlxnhSkcoF5TebJOPAQI/Ciy/rmOpujY8gXAdiyLREsppf/X0SerjwA/Q//+lAWAdRIcyqa6LThgmZXM8j7nlO0THGbXbuWgI5X9IonzXHfbUgbRMR54mkrGdtp9FTchf3E5CCE8kx2Csdzs5F25HnVrCLli+apqmDA12weHIOhivGgbbthKzPI78de10gicSf4Tw/n6Th3v6ncw+1R4MyHc0emMkc9rAeZkBoZn0AT37gxjfDPHtRjcinfx8cjYlIhSNZiSNT1L3h/Ctrq+6TKhyg01EGCqdAtJAGJ2kHg1iR/UvVTuEXcn1goZQEzkot842DeOJejgGLs5an4RQNMoBlPdPtEafpfm1HCzi5Y6EUO0SWDs4W4ZHDz9yiC1b1hSE6jAXtw0lV+7+TtaN9VoKQmWokqtp1z96eMh63ff2zNQ9qJZy4CBs11Lxo11sH+lleEJlkLmrzXN96FYxFm1jrb0cT6g648DF1KqmZ9sVg4Kwgn/tC/IASbENHPcUvYqAUDGRtujIDQH7bC23pwSEArYK8XcTBDxF7+w8qF6AJVT4jp2dR+OPthvfeEL4VhkmaOOpdaDJWVs9G0+YgPMMzU1LUYHrkNXD0YRAzPfCzQiABC9EVk/HE16gNpBFRYMf0beZa7wLkhBsAl1gO7whNIli/pG3wRHCF3QJb7HBv+AbCfkaaABlWgXw7mhtYSaiCSErx6YTjQm+zmXhHsYSQntS2nt6YMxE9DZCcNdBtVTcBM41FlMZkhB8vcUPbCDwwlpr/vdIQjA4jPiKkAC8XLvEvIkbZhYCpHg7MEhi98eBAvc15r+iJFwjCKEoVNphqFhyzbemOMLu7Gog6gvBw7uACxvjDEkILVbkCVygbY15ozmOEDIsyG+tQ8FL5k5evkYRAi4anzzLUAhMZ+b3jnGE0HJoZ4GbCDq4exshMJG35JejoG+4N28jjhDwo9Dna/ufhJBp8x5C85xiSEIgjcN7COM3EUL2L312BYjQfD6jJ3zPTPOuXgrNpROsFtBM8x/XwwlWfGA9zM13bbg9zXt2bcA3fNuuDXJikO+8IRPN3GxHEkKZ8ChOnV4EnYyYm2g4QvDl1rEEIwJNNPPQISQhZNhYeImMBJ4xm3vVJeEJQehBsVDEuVwEsHGyuMnKVwzjdQCd+pQubwZPNBbbCiQhuFzQuqJgp7N5m7GE0GRqc24yLrCbrN72DVkIHX6RZvkE32BxMoMlBOMUKNN8guPAppdgCeErboSzKXjBzGakownBZOKYg4Le88EzZpuQQCwhY9DxHl1OaDBA3ipSAU0Ix4NQZWuFY1kyuwYiCRVJRYliFeBrnlZxq/heysBG0EyncKyJXfIRPKEi+NL9fvJDipoIUIYETfvw3xAOoK1tr1lAgu/h2N3TIyCEnKYk/VQRXW1ZYIKAUBWQjX6uooSOpelCQMiE4qISbiiqLsPZ1gghIVRkmKgxmzdFaKn9FQcKQkUEppzW3eNOlJdmrH0kkhDjp7k3R1XppnZd+HvZup5kfQ2HhBC2Uq+IutTnaolEde3J/tyHhhA2U68d9eAQcaXOrWF7nYSREXJ1pZtB0leDhykvyjrMGUSEyslGKjC/BXx9Uqi+9d46eIDICDVFUuKDxUVg3miuTLsciVAR6vqp/IymE45gkeZGvpPvWhISuRy0KRX8k0m+RxGmuswauVO7JCH+Duld2sQWcTSW75EzZTbn2xPctkiEhCLRFy7YnbdcCSm86jiSX8qx/ALlN9QmjriqjbZskDK4y6peFZuxv3VPM0RHqKjP8iJ/f0qbqgp/VVXlIQrGM/c47575iZDQsGCRv4vj9q44NkukNJpjTN2mNbNze4w8zqXChoHO7naYJCTKT3N/XoqtbQsJc2mamnASxDOqQWc2VhnI9onqfbOjcDdU+IaaUNo+BLW0n4SsJOVdWEZMSJv8sj5gnZ0Ba5c0YA8JprL5rRWgjyK9jO3ICYHCEY6yN58HWrbMp0Dqi1fITNCd2oZgAHk+o75rdpMQWkvIQLuIoiZKl+uLOsLn99kVKuH1haaujSgkoXGWdVvxZO26/O8PRFVLupx7i3a6OsW81OYJVCkvyIrPdHkTyUPtniX49mzZV/2A6vt1qnYd4ZSViiVjsrJInhyvsZUfXt9eXGsj0O69h2/hrAiMOmu9OSgynLqqO77tKniQh9f3da00o6/kt8vWxQSlz/wbISbtmKmECJvjOm+hFAVxviqSKcrXXeNxrnVmJti4Qe+TCpMmjVbnIM+yLM/zyzkqtkk4VXW+ZXYnfFeh1KuupRk97/4PJyvXBb3qGs50JaS2ET9Et4QIt5pdE9dF/z+6RzDfCM3vEc1I96yq98py5Hd5/r9+YkTuhPXfI+TtC+Hi/J4V4336KTPzqGGJdfl8mB6Br7+EJNGEHyPxuJL1qLT6p+bTp9xAT9Vy/9BQ9J4iN58rHkd/ZWvjPZ+BvVStPv4NxNdzzNe63H8C0Xs9xezVVv8DHdXrRfj3q8dvzEpRfKzEIMFyn3CRJXNeNfgwMnVAuPCL5Ww/4xIoqTUktA4n/BjxCroZAREudtF44ZuPk+BwBReQcLFoU29ejMJThcUpCBeL+Cjo3ZcTSbZUfZinJOzqDjfC+3xIibddaw5HNIRS7ekQelM6/HASgnusWenPYvWEUrt8VWyrUHjLz5InwmpbrPLRo61RwtnrSzh/fQnnry/h/PUlnL++hPPXl3D++hLOX1/C+etLOH99Ceevv0/4D2DNv9D7QUXfAAAAAElFTkSuQmCC"/>
      </div>
    );
  }
};

export default class FotografiaField extends ReactComponent {
  static get builderInfo() {
    return {
      title: "Fotografia",
      icon: "square",
      group: "Data",
      documentation: "",
      weight: -10,
      schema: FotografiaField.schema()
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "fotografiaFieldCustomComp",
      label: "Nome do Campo",
    });
  }
  static editForm = function() {
    return {
      components: [
        {
          type: "textfield",
          input: true,
          label: "Label",
          weight: 12,
          key: "label"
        },
        {
          type: "textfield",
          input: true,
          label: "Nome",
          weight: 12,
          key: "nome"
        },
        {
          type: "textfield",
          input: true,
          label: "Identificador",
          weight: 12,
          key: "identificador",
        },
        {
          type: "checkbox",
          input: true,
          label: "Obrigatório",
          weight: 12,
          key: "obrigatorio",
        },
        {
          type: "checkbox",
          input: true,
          label: "Habilitar Galeria",
          weight: 12,
          key: "galeria",
        },
        {
          type: "checkbox",
          input: true,
          label: "Rastreabilizar",
          weight: 12,
          key: "rastrear",
        },
        {
          type: "textfield",
          input: true,
          label: "Classe",
          weight: 12,
          key: "classe",
        },
        {
          type: "textfield",
          input: true,
          label: "Mensagem de Ajuda",
          weight: 12,
          key: "mensagemAjuda",
        },
        {
          type: "checkbox",
          input: true,
          label: "Forçar Vertical",
          weight: 12,
          key: "forcarVertical",
        },]
    };
  }

  attachReact(element) {
    return ReactDOM.render(
      <FotografiaFieldCustomComp
        component={this.component}
        value={this.dataValue}
        onChange={this.updateValue}
      />,
      element
    );
  }

  detachReact(element) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
}
