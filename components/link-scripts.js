import React, { useEffect } from "react";
import $ from 'jquery';

export default function LinkPreviews() {
  useEffect(function mount() {
    $(document).delegate(".actual-links", "click", function(e) {
      e.preventDefault();
      let url = $(this).parent().find("iframe").attr("src");
      window.open(url, '_blank');
    });

    $("#skyhoga").mouseover(function() {
      $("#skyhoga-overlay").css("display", "none");
    });

    $("#skyhoga").mouseout(function() {
      $("#skyhoga-overlay").css("display", "block");
    });
  });

  return null;
}
