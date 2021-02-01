import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-broadcast",
  templateUrl: "./broadcast.component.html",
  styleUrls: ["./broadcast.component.scss"],
})
export class BroadcastComponent implements OnInit {
  storeItem: any[] = [];
  selectedItem = {
    path: "",
    type: "",
    price: "",
    download: "",
    title: "",
    icon: "",
  };
  constructor() {}

  ngOnInit(): void {
    this.setStoreItem();
    this.getStoreExtra();
    this.selectedItem = this.storeItem[0];
  }

  setStoreItem() {
    this.storeItem = [
      {
        path: "assets/store/store-1.png",
        type: "video",
        price: "299",
        download: "104",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-2.png",
        type: "video",
        price: "149",
        download: "30",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },

      {
        path: "assets/store/store-3.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-2.png",
        type: "video",
        price: "300",
        download: "120",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },

      {
        path: "assets/store/store-3.png",
        type: "video",
        price: "150",
        download: "100",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },

      {
        path: "assets/store/store-1.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-2.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-3.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-1.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-3.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
    ];
  }

  getStoreExtra() {
    this.storeItem.forEach((element) => {
      switch (element.type) {
        case "video":
          element["icon"] = "assets/icon/component-1-7.png";
          break;
        case "audio":
          element["icon"] = "assets/icon/audio.png";
          break;
        case "word":
          element["icon"] = "assets/icon/file.png";
          break;
        case "pdf":
          element["icon"] = "assets/icon/file.png";
          break;

        default:
          break;
      }
      element;
    });
  }

  selectItem(item) {
    this.selectedItem = item;
  }
}
