import fotoperfil from "../svg/fotoperfil.svg";
import fotoNatal from "../svg/natal.png";

export const getSeasonalProfile = () => {
  const mesAtual = new Date().getMonth();
  return mesAtual === 11 ? fotoNatal : fotoperfil; // 11 = dezembro
};
